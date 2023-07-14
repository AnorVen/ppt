'use client';
import { bd } from '@/bd';
import { sagaActions } from '@/components/sagaActions';
import { TableComponent } from '@/semantic-ui/components/table';

import { COLUMNS } from '@/app/constants';
import { useDispatch, useSelector } from 'react-redux';

const StudyPage = () => {
	const todos = useSelector((state) => state.todo.todos);
	const courses = useSelector((state) => state.todo.courses);
	const dispatch = useDispatch();

	console.log(courses);


	const tableData = [];
	return (
		<div className="">
			study pages
			<button onClick={() => dispatch({ type: sagaActions.GET_COURSES })}> afwawf</button>

		</div>
	);
};
export default StudyPage;