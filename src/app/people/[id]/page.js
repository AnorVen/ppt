'use client';
import { sagaActions } from '@/components/sagaActions';
import { constants, types } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Grid, Icon } from 'semantic-ui-react';
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

	const [activeIndex, setActiveIndex] = useState(-1);

	const handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const newIndex = activeIndex === index ? -1 : index;
		console.log(newIndex);
		setActiveIndex(newIndex);
	};

	return (<div>
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
				{coursesForTrainer.length && <>
					<div className="description">Курсы и мероприятия тренера</div>
					<div className="course-list">
						<Accordion>
							<div>
								<Accordion.Title
									active={activeIndex === 0}
									index={0}
									onClick={handleClick}
								>
									<Icon name="dropdown" />
									What is a dog?
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 0}>
									<p>
										A dog is a type of domesticated animal. Known for its loyalty and
										faithfulness, it can be found as a welcome guest in many households
										across the world.
									</p>
								</Accordion.Content>
							</div>
									<div>
									<Accordion.Title
										active={activeIndex === 1}
										index={1}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 1}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
									</div>
							<div>
									<Accordion.Title
										active={activeIndex === 2}
										index={2}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 2}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
							</div>
							<div>
									<Accordion.Title
										active={activeIndex === 3}
										index={3}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 3}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
							</div>
							<div>
									<Accordion.Title
										active={activeIndex === 4}
										index={4}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 4}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
							</div>
							<div>
									<Accordion.Title
										active={activeIndex === 5}
										index={5}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 5}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
							</div>
							<div>
									<Accordion.Title
										active={activeIndex === 6}
										index={6}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 6}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
							</div>
							<div>
									<Accordion.Title
										active={activeIndex === 7}
										index={7}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 7}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
							</div>
							<div>
									<Accordion.Title
										active={activeIndex === 8}
										index={8}
										onClick={handleClick}
									>
										<Icon name="dropdown" />
										What is a dog?
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 8}>
										<p>
											A dog is a type of domesticated animal. Known for its loyalty and
											faithfulness, it can be found as a welcome guest in many households
											across the world.
										</p>
									</Accordion.Content>
							</div>
						</Accordion>
						{seminarsForTrainer.length && seminarsForTrainer.map((seminar, index) => {
							return <div key={seminar._id} className="course-item">
								<Accordion.Title
									active={activeIndex === index}
									index={index}
									onClick={handleClick}
								>
									<div className="course-title">Семинар</div>
									<div className="course-title">{seminar.title}</div>
									<div>{seminar.type}</div>
									<div>Продолжительность: {seminar.count}</div>
									<div>Даты: {seminar.dates.join(', ')}</div>
								</Accordion.Title>
								<Accordion.Content active={activeIndex === index}>
									<div className="course-desc"
									     dangerouslySetInnerHTML={{ __html: seminar.description }} />
								</Accordion.Content>
							</div>;
						})}
						{coursesForTrainer.concat(coursesForTrainer, coursesForTrainer, coursesForTrainer)
						.map(course => {
							return <div className="course-item" key={course._id}>
								<div className="course-title">{types[course.type]}</div>
								<div className="course-title">{course.title}</div>
								<div className="course-title">{cities[course.city]}</div>
								<div>Организатор: {getTrainer(course.organizer)}</div>
								<div>Контакты: {course.organizer_contacts}</div>
								<div className="course-hideContent">
									<div className="course-desc"
									     dangerouslySetInnerHTML={{ __html: course.description }}
									/>
									<div>
										Даты модулей:
										<div>{
											course.modules.map(module => {
												return <div key={module._id}>
													<div>№ модуля: {module.module_number}</div>
													<div>{getThem(course.type, module.them)}</div>
													<div>Даты: {module.dates.join(', ')}</div>
													<div>Тренер: {getTrainer(module.trainer)}</div>
												</div>;
											})
										}</div>
									</div>
								</div>


							</div>;
						})}

					</div>
				</>}
			</>
			}
		</div>
	);
};
export default PeopleInfo;