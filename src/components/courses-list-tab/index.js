'use client';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './style.scss';

export const CoursesListTab = () => {
	const dispatch = useDispatch();
	const myCourses = useSelector(state =>{
		const id = state.main.user.id
		const courses =  state.main.courses
		const seminars =  state.main.seminars
		let temp = courses.concat(seminars).filter(item => item.main_trainer === id)
		return temp
	});
	console.log(myCourses);
	return <div>
		<h3>Мои мероприятия</h3>
		<div>

		</div>
	</div>;
};
