'use client';
import { CREATE_COURSE, CREATE_SEMINAR } from '@/components/actions';
import AdditionalProgram from '@/components/courses-tab/additional-program';
import BaseCourse from '@/components/courses-tab/BaseCourse';
import MasterCourse from '@/components/courses-tab/master-course';
import Seminars from '@/components/courses-tab/seminars';
import { sagaActions } from '@/components/sagaActions';
import { types } from '@/constants';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './style.scss';

export const CoursesTab = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: sagaActions.GET_COURSES });
		dispatch({ type: sagaActions.GET_CENTERS });
		dispatch({ type: sagaActions.GET_SEMINARS });
		dispatch({ type: sagaActions.GET_TRAINERS });
		dispatch({ type: sagaActions.GET_CITIES });
	}, []);
	const [type, setType] = useState('basic_course');
	const variants = {
		basic_course: <BaseCourse/>,
		seminar: <Seminars />,
		master_course: <MasterCourse/>,
		master_class: <Seminars />,
		conference: <Seminars />,
		additional_program: <Seminars />,
	};

	const saveVariants = {
		basic_course: 'CREATE_COURSE',
		seminar: 'CREATE_SEMINAR',
		master_course: 'CREATE_COURSE',
		master_class:'CREATE_SEMINAR',
		conference: 'CREATE_SEMINAR',
		additional_program: 'CREATE_SEMINAR',
	};
	const handleSaveChanges = () => {
		dispatch({ type: sagaActions[saveVariants[type]] });
	};
	return <div>
		<h3>Добавить новое мероприятие</h3>
		<div className="courses-header">
			<select name="type" onChange={(e) => setType(e.target.value)} value={type}>
				{Object.entries(types).map(([key, val]) => <option key={key} value={key}>{val}</option>)}
			</select>
			<Button onClick={handleSaveChanges}>сохранить изменения</Button>
		</div>

		<div>
			{variants[type]}
		</div>
		<Button onClick={handleSaveChanges}>сохранить изменения</Button>
	</div>;
};
