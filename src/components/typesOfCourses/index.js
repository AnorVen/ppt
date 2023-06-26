const TypesOfCourses = ({ type, trainer, trainers, onChangeMainTrainer }) => {
	if (type === 'master'){
		return <div>
			Обучение ППТ Мастер курс
		</div>;
	}
	if (type === 'specialization'){
		return <div>
			Специализации
		</div>;
	}
	if (type === 'seminars'){
		return <div>
			Семинар
		</div>;
	}
	if (type === 'conferences'){
		return <div>
			Конференция
		</div>;
	}

	return <div>
		Обучение ППТ Базовый курс
				<div>
					<p>Главный тренер курса</p>
					<select name="main_trainer" id="main_trainer" onChange={onChangeMainTrainer}
					        value={trainer}>
						{trainers.map(trainerInfo => (<option value={trainerInfo.value} key={trainerInfo.value}>
							{trainerInfo.name}
						</option>))}
					</select>
				</div>

				<div>
					<p>Город</p>
					<select name="main_trainer" id="main_trainer" onChange={onChangeMainTrainer}
					        value={trainer}>
						{trainers.map(trainerInfo => (<option value={trainerInfo.value} key={trainerInfo.value}>
							{trainerInfo.name}
						</option>))}
					</select>
				</div>
				<div>
					<p>Главный тренер курса</p>
					<select name="city" id="city" onChange={onChangeMainTrainer}
					        value={trainer}>
						{trainers.map(trainerInfo => (<option value={trainerInfo.value} key={trainerInfo.value}>
							{trainerInfo.name}
						</option>))}
					</select>
				</div>

			</div>;
}
export default TypesOfCourses
