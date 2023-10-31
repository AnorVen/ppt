'use client';
import { sagaActions } from '@/components/sagaActions';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PeoplePage = () => {
	const dispatch = useDispatch();
	const trainers = useSelector(state => state.main.trainers);
	const trainersArr = Object.values(trainers);
	useEffect(() => {
		if (!trainersArr.length) {
			dispatch({ type: sagaActions.GET_TRAINERS });
		}
	}, []);


	return (
		<div className="wrapper_text">
			<div className="trainers-list">
				{trainersArr.concat(trainersArr, trainersArr,trainersArr ,trainersArr,trainersArr ,trainersArr,trainersArr).map(trainer => {
					return (
						<div key={trainer.id} className="trainers-item">
							<div className="avatar">
								<Link href={`/people/${trainer.id}`}>
									<Image src={`/images/avatars/noAva.png`} width={200} height={200}
									       alt={`${trainer?.surname} ${trainer?.surname} ${trainer?.second_name}`} />
								</Link>
							</div>
							<div className="text-block">
								<div><Link
									href={`/people/${trainer.id}`}>{trainer.surname} {trainer.surname} {trainer.second_name}</Link>
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
