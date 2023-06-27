import { bd } from '@/bd';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';

const getPeople = (id) => {
	let people = bd.trainers.find(item => item.id === id);
	console.log('people', people);
	if (people) {
		return `${people.surname} ${people.name} ${people.second_name}`;
	}
	return id;
};

const getThem = (type, them) => {
	if (type === 'base') {
		return bd.base_thems.find(item => item.key === them).title;
	}
	return bd.master_thems.find(item => item.key === them).title;
};

const PeopleInfo = ({ params }) => {
	const { trainers, courses, seminars } = bd;
	const trainer = trainers.filter(item => item.id === params.id)[0];
	const coursesForTrainer = courses.filter(item => item.main_trainer === params.id);
	const seminarsForTrainer = seminars.filter(item => item.trainer === params.id);
	return (
		<div>
			<div className="description">
				<div className="avatar">
					<Image src={`/images/avatars/${trainer.id}.png`} width={200} height={200}
					       alt={`${trainer.surname} ${trainer.surname} ${trainer.second_name}`} />
				</div>
				<div className="text-block">
					<div>{trainer.surname} {trainer.surname} {trainer.second_name}</div>
					<div dangerouslySetInnerHTML={{ __html: trainer.description }} />
					<div>Контакты: <a href={`tel:${trainer.phone}`}>{trainer.phone}</a>, email: <a
						href={`mailto:${trainer.email}`}>{trainer.email}</a></div>
				</div>
			</div>
			Курсы и мероприятия тренера
			<div className="courses-list">
				{coursesForTrainer.map(course => {
					return <div className="course-item" key={course.id}>
						<div className="course-title">{course.title}</div>
						<div className="course-title">{course.city}</div>
						<div className="course-desc" dangerouslySetInnerHTML={{ __html: course.description }} />
						<div>Организатор: {getPeople(course.organizer)}</div>
						<div>Контакты: {course.organizer_contacts}</div>
						<div>
							Даты модулей:
							<div>{
								course.modules.map(module => {
									return <div key={module.dates.join('')}>
										<div>№ модуля: {module.module_number}</div>
										<div>{getThem(course.type, module.them)}</div>
										<div>Даты: {module.dates.join(', ')}</div>
										<div>Тренер: {getPeople(module.trainer)}</div>
									</div>;
								})
							}</div>
						</div>


					</div>;
				})}
				{seminarsForTrainer.length && <div>Семинары:
					<div>
						{seminarsForTrainer.map(seminar => {
							return <div key={seminar.id}>
								<div>{seminar.title}</div>
								<div>{seminar.type}</div>
								<div dangerouslySetInnerHTML={{ __html: seminar.description }} />
								<div>Продолжительность: {seminar.count}</div>
								<div>Даты: {seminar.dates.join(', ')}</div>

							</div>;
						})}
					</div></div>}
			</div>
		</div>
	);
};
export default PeopleInfo;