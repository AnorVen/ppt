'use client';

import { types, typeToThem } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

export const CoursesListTab = () => {
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

	let a = {
		'_id': '6566437a119fa000540f9a54',
		'type': 'basic_course',
		'main_trainer': '64fc702ff2a33710dc44ba6d',
		'city': '64f6273016e2f1628874850e',
		'title': '123123',
		'organizer': '123123',
		'organizer_contacts': '123123',
		'modules': [
			{
				'module_number': '1',
				'trainer': '64fc702ff2a33710dc44ba6d',
				'dates': [],
				'count': '24',
				'them': 'base_them_1',
				'_id': '6566437a119fa000540f9a55',
			},
			{
				'module_number': '2',
				'trainer': '64fc702ff2a33710dc44ba6d',
				'dates': [],
				'count': '24',
				'them': 'base_them_2',
				'_id': '6566437a119fa000540f9a56',
			},
			{
				'module_number': '3',
				'trainer': '64fc702ff2a33710dc44ba6d',
				'dates': [],
				'count': '24',
				'them': 'base_them_3',
				'_id': '6566437a119fa000540f9a57',
			},
			{
				'module_number': '4',
				'trainer': '64fc702ff2a33710dc44ba6d',
				'dates': [],
				'count': '24',
				'them': 'base_them_4',
				'_id': '6566437a119fa000540f9a58',
			},
			{
				'module_number': '5',
				'trainer': '64fc702ff2a33710dc44ba6d',
				'dates': [],
				'count': '24',
				'them': 'base_them_5',
				'_id': '6566437a119fa000540f9a59',
			},
		],
		'__v': 0,
	};
	return <div>
		<h3>Мои мероприятия</h3>
		<div>
			{myCourses.map(course => {
				return (<div key={course.id}>
					{course.title && <div>{course.title}</div>}
					{types[course.type]}
					{course.city && <div>{cities[course.city]}</div>}
					{course.main_trainer && <div>{trainers[course.main_trainer].surname}</div>}
					{course.organizer && <div>{course.organizer}</div>}
					{course.organizer_contacts && <div>{course.organizer_contacts}</div>}
					{course.modules.map(module => {
						return <div key={module._id} className="module_item">
							<div>Номер модуля {module.module_number}</div>

							<div>Тема: {typeToThem[course.type][module.them]}</div>

							<div>Даты: {module.dates.join(', ')}    </div>
							<div>Тренер: {module.trainer && trainers[module.trainer].surname}</div>


							<div>Продолжительность: {module.count}</div>


						</div>;
					})}
				</div>);
			})}
		</div>
	</div>;
};
