'use client';

import { sagaActions } from '@/components/sagaActions';
import { setActiveCourse } from '@/components/store/store';
import { types, typeToThem } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from 'redux-form';
import { Button } from 'semantic-ui-react';
import './style.scss';

export const CoursesListTab = ({
	                               handleChangeTab,
	                               setCourseType
                               }) => {
	const dispatch = useDispatch();
	const myCourses = useSelector(state => {
		const id = state.main.user.id;
		const courses = state.main.courses;
		const seminars = state.main.seminars;
		let temp = courses.concat(seminars);
		console.log(id, temp);
		return temp.filter(item => item.main_trainer === id);
	});
	const trainers = useSelector(state => state.main.trainers);
	const cities = useSelector(state => state.main.cities);
	console.log('myCourses', myCourses);

	const handleEdit = (course) => {
		handleChangeTab({
			target: {
				dataset: {
					id: 'courses',
				},
			},
		});
		setCourseType(course.type)
		dispatch(setActiveCourse(course))
	};
	const handleDelete = (id, type) => {
		if (type === 'basic_course' || type === 'master_course') {
			dispatch({ type: sagaActions.DELETE_COURSE, id });
			return;
		}
		dispatch({ type: sagaActions.DELETE_SEMINAR, id });
	};

	const getTitle = (course) => {
		let title = course.title || '';
		if (course.modules){
			let firstData = course.modules?.at(0)?.dates?.at(0) || '';
			let lastData = course.modules?.at(-1)?.dates?.at(-1) || '';
			title = `${title} ${firstData} - ${lastData}`;
		}else {
			let firstData = course.dates?.at(0) || '';
			let lastData = course.dates?.at(-1) || '';
			title = `${title} ${firstData} - ${lastData}`;
		}

		return title
	};
	const getName = (main_trainer) => {
		const trainer = trainers[main_trainer];
		return `${trainer.surname} ${trainer.name} ${trainer.second_name}`;
	};

	return <div>
		<h3>Мои мероприятия</h3>
		<div className="course_items">
			{myCourses.map(course => {
				return (<div key={course._id} className="course_item">
					<div className="course_block">
						<div className="course_main">
							<div>{getTitle(course)}</div>
							<div>{types[course.type]}</div>
							{course.city && <div>{cities[course.city]}</div>}
							{course.main_trainer && <div>
								{getName(course.main_trainer)}
							</div>}
							{course.organizer && <div>{course.organizer}</div>}
							{course.organizer_contacts && <div>{course.organizer_contacts}</div>}
						</div>
						<div className="module_items">
							{course.modules?.map(module => {
								return <div key={module._id} className="module_item">
									<div>Номер модуля {module.module_number}</div>
									<div>Тема: {typeToThem[course.type][module.them]}</div>
									<div>Даты: {module.dates.join(', ')}    </div>
									<div>Тренер: {module.trainer && trainers[module.trainer].surname}</div>
									<div>Продолжительность: {module.count}</div>
								</div>;
							})}
						</div>
					</div>
					<Button onClick={() => handleEdit(course)}
					        className="educationTop__btn">Изменить курс</Button>
					<Button onClick={() => handleDelete(course._id, course.type)}
					        className="educationTop__btn">Удалить курс</Button>
				</div>);
			})}
		</div>
	</div>;
};
