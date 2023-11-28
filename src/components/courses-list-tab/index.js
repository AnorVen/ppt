'use client';
import { CREATE_COURSE, CREATE_SEMINAR } from '@/components/actions';
import AdditionalProgram from '@/components/courses-tab/additional-program';
import BaseCourse from '@/components/courses-tab/BaseCourse';
import MasterCourse from '@/components/courses-tab/master-course';
import Seminars from '@/components/courses-tab/seminars';
import { sagaActions } from '@/components/sagaActions';
import { types } from '@/constants';
import { useState, useEffect } from 'react';
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
