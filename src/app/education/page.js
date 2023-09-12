'use client';
import { GET_CITIES, GET_TRAINERS } from '@/components/actions';
import { constants } from '@/constants';
import { DescriptionPopup } from '@/components/descripton-popup';
import { sagaActions } from '@/components/sagaActions';
import { TableComponent } from '@/semantic-ui/components/table';

import { COLUMNS } from '@/app/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';

const getThem = (type, them) => {;
	if (type === 'basic_course') {
		return constants.base_themes[them];
	}
	return constants.master_themes[them]
};

const StudyPage = () => {
	const isTableDataLoading = useSelector(state => state.main.isTableDataLoading )
	const isDescriptionPopupShow = useSelector(state => state.main.isDescriptionPopupShow )
	const courses = useSelector((state) => {
		const line = []
		const trainers = state.main.trainers
		console.log(trainers);
		state.main.courses.forEach(course => {
			course?.modules?.forEach(module => {
				const main_trainer = trainers.find(item=> item.id === course.main_trainer)
				const trainer = trainers.find(item=> item.id === module.trainer)
				line.push({...module,
					trainer:  `${trainer?.surname} ${trainer?.name}`,
					main_trainer: `${main_trainer?.surname} ${main_trainer?.name}`,
					city: course.city,
					type:`${constants.types[course.type]} - ${course.title}` ,
					title: getThem(course.type, module.them),
					description: course.description,
					organizer: course.organizer,
					organizer_contacts: course.organizer_contacts,
					dates: module?.dates?.join(', ') || 'Не известно'
				})
			})
		})
		return line
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: sagaActions.GET_COURSES })
		dispatch({ type: sagaActions.GET_CENTERS })
		dispatch({ type: sagaActions.GET_SEMINARS })
		dispatch({ type: sagaActions.GET_TRAINERS })
		dispatch({ type: sagaActions.GET_CITIES })
	}, []);
	const tableData = [];
	return (
		<div className="">
			study pages
			<button onClick={() => dispatch({ type: sagaActions.GET_COURSE, uuid: '64ecdc804ab935f2de3272f7' })}> afwawf</button>

			{isTableDataLoading && <Loader active={isTableDataLoading} />}
			<div className="table-content__content">
				<TableComponent
					columns={COLUMNS}
					rows={courses}
					isTableFixed
					isScroll
				/>
			</div>
			{isDescriptionPopupShow && <DescriptionPopup/>}
		</div>
	);
};
export default StudyPage;