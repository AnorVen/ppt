'use client';
import { sagaActions } from '@/components/sagaActions';
import Link from 'next/link';
import './style.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PeoplePage = () => {
	const dispatch = useDispatch();
	const trainers = useSelector(state => state.main.trainers);
	const trainersArr = Object.values(trainers).filter(item => item?.type === 'trainer');
	useEffect(() => {
		if (!trainersArr.length) {
			dispatch({ type: sagaActions.GET_TRAINERS });
		}
	}, []);


	return (
		<div className="wrapper_text">
			<div className="trainers-list">
				{trainersArr.map(trainer => {
					return (
						<div key={trainer.id} className="trainers-item">
							<div className="avatar">
								<Link href={`/people/${trainer.id}`}>
									<img src={trainer.avatar} width={200} height={200}
									     alt={`${trainer?.surname} ${trainer?.name} ${trainer?.second_name}`} />
								</Link>
							</div>
							<div className="text-block">
								<div><Link
									href={`/people/${trainer.id}`}>{trainer.surname} {trainer.name} {trainer.second_name}</Link>
								</div>
								<div>Контакты:
									{
										trainer.phone
											? <p><a href={`tel:${trainer.phone}`}>{trainer.phone}</a>,</p>
											: ''
									}
									{trainer.email
										? <p>email: <a
											href={`mailto:${trainer.email}`}>{trainer.email}</a></p>
										: ''
									}
								</div>
							</div>

						</div>
					);
				})}
			</div>
		</div>
	);
};
export default PeoplePage;
