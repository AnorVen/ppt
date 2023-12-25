'use client';
import AboutTab from '@/components/about-tab';
import { CoursesListTab } from '@/components/courses-list-tab';
import { CoursesTab } from '@/components/courses-tab';
import { sagaActions } from '@/components/sagaActions';
import { setActiveCourse } from '@/components/store/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

const Profile = () => {
	useEffect(() => {
		dispatch({ type: sagaActions.CHECK_AUTH });
		dispatch({ type: sagaActions.GET_COURSES });
		dispatch({ type: sagaActions.GET_CENTERS });
		dispatch({ type: sagaActions.GET_SEMINARS });
		dispatch({ type: sagaActions.GET_TRAINERS });
		dispatch({ type: sagaActions.GET_CITIES });
	}, []);
	const dispatch = useDispatch();
	const activeCourse = useSelector(state => state.main.activeCourse);
	const [tabName, setTabName] = useState('about');
	const [courseType, setCourseType] = useState(null);

	const handleChangeTab = ({
		                         target: {
			                         dataset: {
				                         id,
			                         },
		                         },
	                         }) => {

		setTabName(id);
		if (activeCourse){
			dispatch(setActiveCourse(undefined))
		}
	};
	const tabs = [
		{
			id: 'about',
			text: 'О себе',
		},
		{
			id: 'courses',
			text: 'Добавить мероприятие',
		},
		{
			id: 'coursesList',
			text: 'Мои мероприятия',
		},
	];

	const handleLogout = () => {
		dispatch({ type: sagaActions.LOGOUT });
		window.location.assign('/');
	};
	return (
		<div className="profile">
			<div className="container">
				<div className="nav">
					{tabs.map(item => {
						return (
							<div key={item.id} className={`nav-item${tabName === item.id ? ' active' : ''}`}
							     onClick={handleChangeTab}
							     data-id={item.id}>{item.text}</div>
						);
					})}
					<div className={`nav-item`}
					     onClick={handleLogout}>Выход
					</div>
				</div>
				<div className="tab">
					{tabName === 'about' && <AboutTab />}
					{tabName === 'courses' && <CoursesTab courseType={courseType} />}
					{tabName === 'coursesList' && <CoursesListTab handleChangeTab={handleChangeTab} setCourseType={setCourseType} />}
				</div>
			</div>

		</div>
	);
};
export default Profile;
