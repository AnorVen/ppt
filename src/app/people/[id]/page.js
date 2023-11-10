'use client';
import { sagaActions } from '@/components/sagaActions';
import { constants, types } from '@/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

const PeopleInfo = ({ params }) => {
	const dispatch = useDispatch();
	const trainers = useSelector(state => state.main.trainers);
	const trainer = trainers[params.id];
	useEffect(() => {
		if (!trainer) {
			dispatch({ type: sagaActions.GET_TRAINERS });
		}
	}, []);
	return (<div className='wrapper_text'>
			{trainer && <>
				<div className="description">
					<div className="avatar">
						<Image src={trainer.avatar} width={200} height={200}
						       alt={`${trainer?.surname} ${trainer?.name} ${trainer?.second_name}`} />
					</div>
					<div className="text-block">
						<div>{trainer.name} {trainer.surname} {trainer.second_name}</div>
						<div dangerouslySetInnerHTML={{ __html: trainer.description }} />
						<div>Контакты: <a href={`tel:${trainer.phone}`}>{trainer.phone}</a>, email: <a
							href={`mailto:${trainer.email}`}>{trainer.email}</a></div>
					</div>
				</div>
			</>
			}
		</div>
	);
};
export default PeopleInfo;