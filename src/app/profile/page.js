'use client';
import AboutTab from '@/components/about-tab';
import { GET_TRAINER } from '@/components/actions';
import { CoursesTab } from '@/components/courses-tab';
import { getTrainerSaga } from '@/components/saga/trainerSaga';
import { sagaActions } from '@/components/sagaActions';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
	const user = useSelector(state => state.main.user);
	const isAuth = useSelector(state => state.main.isAuth);
	useEffect(() => {
		if (localStorage.getItem('token') && (!user.id || !isAuth) ){
			dispatch({ type: sagaActions.CHECK_AUTH });
		}
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
			text: 'Мероприятия',
		}];

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
				</div>
			</div>

		</div>
	);
};
export default Profile;
