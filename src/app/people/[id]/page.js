'use client';
import { sagaActions } from '@/components/sagaActions';
import { constants, types } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion } from 'semantic-ui-react';
import './style.scss';


const getThem = (type, them) => {
	if (type === 'basic_course') {
		return constants.base_themes[them];
	}
	return constants.master_themes[them];
};

const PeopleInfo = ({ params }) => {
	const dispatch = useDispatch();
	const trainers = useSelector(state => state.main.trainers);
	const seminars = useSelector(state => state.main.seminars);
	const courses = useSelector(state => state.main.courses);
	const cities = useSelector(state => state.main.cities);
	const trainer = trainers[params.id];
	useEffect(() => {
		if (!trainer) {
			console.log('!trainer');
			dispatch({ type: sagaActions.GET_TRAINERS });
		}
		if (!seminars.length) {
			dispatch({ type: sagaActions.GET_SEMINARS });
		}
		if (!courses.length) {
			dispatch({ type: sagaActions.GET_COURSES });
		}
		if (!Object.keys(cities).length) {
			dispatch({ type: sagaActions.GET_CITIES });
		}
	}, []);
	console.log(trainers);

	console.log(trainer);
	const getTrainer = (id) => {
		let name;
		if (trainers[id]) {
			const trainer = trainers[id];
			name = `${trainer?.surname} ${trainer?.name} ${trainer?.second_name}`;
		} else {
			name = id;
		}
		return name;
	};
	const coursesForTrainer = courses.filter(item => item.main_trainer === params.id);
	const seminarsForTrainer = seminars.filter(item => item.trainer === params.id);
	const renderCourses = seminarsForTrainer.concat(coursesForTrainer);
	const [activeIndex, setActiveIndex] = useState(-1);

	const handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const newIndex = activeIndex === index ? -1 : index;
		console.log(newIndex);
		setActiveIndex(newIndex);
	};

	return (<div className='wrapper_text'>
			{trainer && <>
				<div className="description">
					<div className="avatar">
						<Image src={`/images/avatars/noAva.png`} width={200} height={200}
						       alt={`${trainer?.surname} ${trainer?.name} ${trainer?.second_name}`} />
					</div>
					<div className="text-block">
						<div>{trainer.name} {trainer.surname} {trainer.second_name}</div>
						<div dangerouslySetInnerHTML={{ __html: trainer.description }} />
						<div>Контакты: <a href={`tel:${trainer.phone}`}>{trainer.phone}</a>, email: <a
							href={`mailto:${trainer.email}`}>{trainer.email}</a></div>
					</div>
				</div>
				{renderCourses.length && <>
					<div className="description">Курсы и мероприятия тренера</div>
					<Accordion>
						<div className="course-list">
							{renderCourses.concat(coursesForTrainer, coursesForTrainer, coursesForTrainer)
							.map((course, index) => {
								const isSeminar = course.type === 'seminar';
								const titleDates = isSeminar
									? [course.dates[0], course.dates.at(-1)].join(' по ')
									: [course.modules[0].dates[0], course.modules.at(-1).dates.at(-1)].join(' по ');

								return <div className="course-item" key={course._id}>
									<Accordion.Title
										active={activeIndex === index}
										index={index}
										onClick={handleClick}
									>
										<div className="course-title">{types[course.type]}</div>
										<div className="course-title">{course.title} - с {titleDates}</div>
										{isSeminar && <div>Тип: {course.type_of_work}</div>}
										{isSeminar && <div>Продолжительность: {course.count}</div>}
										<div className="course-title">{cities[course.city]}</div>
										<div>Организатор: {getTrainer(course.organizer)}</div>
										<div>Контакты: {course.organizer_contacts}</div>
									</Accordion.Title>
									<Accordion.Content active={activeIndex === index}>
										<div className="course-desc"
										     dangerouslySetInnerHTML={{ __html: course.description }}
										/>
										{course?.modules && course?.modules?.length && <div>
											Даты модулей:
											<div>{
												course.modules.map(module => {
													return <div key={module._id} className='course-module'>
														<div>№ модуля: {module.module_number}</div>
														<div>{getThem(course.type, module.them)}</div>
														<div>Даты: {module.dates.join(', ')}</div>
														<div>Тренер: {getTrainer(module.trainer)}</div>
													</div>;
												})
											}</div>
										</div>}

									</Accordion.Content>
								</div>;
							})}

						</div>
					</Accordion>
				</>}
			</>
			}
		</div>
	);
};
export default PeopleInfo;