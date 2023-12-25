'use client';
import { CREATE_COURSE, CREATE_SEMINAR } from '@/components/actions';
import AdditionalProgram from '@/components/courses-tab/additional-program';
import BaseCourse from '@/components/courses-tab/BaseCourse';
import MasterCourse from '@/components/courses-tab/master-course';
import Seminars from '@/components/courses-tab/seminars';
import { sagaActions } from '@/components/sagaActions';
import { setActiveCourse } from '@/components/store/store';
import { types } from '@/constants';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './style.scss';

export const CoursesTab = ({ courseType }) => {
	const dispatch = useDispatch();
	const [type, setType] = useState(courseType || 'basic_course');
	const variants = {
		basic_course: <BaseCourse />,
		master_course: <MasterCourse />,
		seminar: <Seminars />,
		master_class: <Seminars />,
		conference: <Seminars />,
		additional_program: <AdditionalProgram />,
	};

	const saveVariants = {
		basic_course: 'CREATE_COURSE',
		seminar: 'CREATE_SEMINAR',
		master_course: 'CREATE_COURSE',
		master_class: 'CREATE_SEMINAR',
		conference: 'CREATE_SEMINAR',
		additional_program: 'CREATE_SEMINAR',
	};
	const handleSaveChanges = () => {
		dispatch({ type: sagaActions[saveVariants[type]], variant: type });
	};

	const handleChangeTab = ({
		                         target: {
			                         value,
		                         },
	                         }) => {
		setType(value);
		dispatch(setActiveCourse(undefined));
	};

	return <div>
		<h3>Добавить новое мероприятие</h3>
		<div className="courses-header">
			<select name="type" onChange={handleChangeTab} value={type}>
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
