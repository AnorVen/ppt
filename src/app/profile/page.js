'use client';
import AboutTab from '@/components/about-tab';
import { CoursesTab } from '@/components/courses-tab';
import { sagaActions } from '@/components/sagaActions';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';

const Profile = () => {
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
