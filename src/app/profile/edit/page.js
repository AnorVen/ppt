'use client';
import { useState } from 'react';

async function getTrainers() {
	const res ={
		ok: true,
		items: [{
			value: 'test_uuid',
			name: 'test_name',
		}, {
			value: 'test_uuid1',
			name: 'test_name1',
		}, {
			value: 'test_uuid2',
			name: 'test_name2',
		}, {
			value: 'test_uuid3',
			name: 'test_name3',
		}]
	} ;
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.items;
}

const PeopleEdit = async ({ params }) => {
	const [type, setType] = useState('base');
	const [trainer, setTrainer] = useState('test_uuid');
	const trainers = await getTrainers();
	const handleChangeType = ({
		                          target: {
			                          value,
		                          },
	                          }) => {
		setType(value);
	};

	const handleChangeMainTrainer = ({
		                                 target: {
			                                 value,
		                                 },
	                                 }) => {
		setTrainer(value);
	};
	const renderType = () => {
		switch (type) {
			case 'base':
				return <div>
					base
					<div>
						Главный тренер курса
						<select name="main_trainer" id="main_trainer" onChange={handleChangeMainTrainer}
						        value={trainer}>
							{trainers.map(trainerInfo => (<option value={trainerInfo.value} key={trainerInfo.value}>
								{trainerInfo.name}
							</option>))}
						</select>
					</div>

				</div>;
			case 'master':
				return <div>
					master
				</div>;
			case 'specialization':
				return <div>
					specialization
				</div>;
			case 'seminars':
				return <div>
					seminars
				</div>;
			case 'conferences':
				return <div>
					conferences
				</div>;
			default:
				return <div>
					base
				</div>;
		}
	};

	return (
		<div className="people-edit">
			<div>
				Тип мероприятия
				<select name="course_type" id="course_type" onChange={handleChangeType} value={type}>
					<option value="base">
						Обучение ППТ Базовый курс
					</option>
					<option value="master">
						Обучение ППТ Мастер курс
					</option>
					<option value="specialization">
						Специализации
					</option>
					<option value="seminars">
						Семинары
					</option>
					<option value="conferences">
						Конференции
					</option>
				</select>
			</div>
			{renderType()}
		</div>
	);
};
export default PeopleEdit;