'use client';
import { bd } from '@/bd';
import { sagaActions } from '@/components/sagaActions';
import { TableComponent } from '@/semantic-ui/components/table';

import { COLUMNS } from '@/app/constants';
import { useDispatch, useSelector } from 'react-redux';

const StudyPage = () => {
	const courses = useSelector((state) => {
		const line = []
		const trainers = state.main.trainers
		state.main.courses.forEach(course => {
			course.modules.forEach(module => {
				const main_trainer = trainers.find(item=> item.id === course.main_trainer)
				const trainer = trainers.find(item=> item.id === module.trainer)
				line.push({...module,
					trainer:  `${trainer.surname} ${trainer.name}`,
					main_trainer: `${main_trainer.surname} ${main_trainer.name}`,
					city: course.city,
					title: course.title,
					description: course.description,
					organizer: course.organizer,
					organizer_contacts: course.organizer_contacts,
				})
			})
		})
		return line
	});
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