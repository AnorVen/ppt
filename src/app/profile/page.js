'use client';
import { sagaActions } from '@/components/sagaActions';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
	const dispatch = useDispatch();
	const trainers = useSelector(state => state.main.trainers);


	return (
		<div className="wrapper_text">
			<div className="trainers-list">
				Profile
			</div>
		</div>
	);
};
export default Profile;
