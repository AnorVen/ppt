'use client';
import AboutTab from '@/components/about-tab';
import { GET_TRAINER } from '@/components/actions';
import { CoursesListTab } from '@/components/courses-list-tab';
import { CoursesTab } from '@/components/courses-tab';
import { getTrainerSaga } from '@/components/saga/trainerSaga';
import { sagaActions } from '@/components/sagaActions';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';


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
	const [tabName, setTabName] = useState('about');
	const handleChangeTab = (e) => {
		setTabName(e.target.dataset.id);
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

	const handleLogout = () =>{
		dispatch({ type: sagaActions.LOGOUT });
		window.location.assign('/')
	}
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
					     onClick={handleLogout}>Выход</div>
				</div>
				<div className="tab">
					{tabName === 'about' && <AboutTab />}
					{tabName === 'courses' && <CoursesTab />}
					{tabName === 'coursesList' && <CoursesListTab />}
				</div>
			</div>

		</div>
	);
};
export default Profile;
