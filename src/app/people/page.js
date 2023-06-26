import Image from 'next/image';
import Link from 'next/link';

const PeoplePage = async ({ params }) => {
	const trainers =  [
		{
			name: 'Светлана',
			second_name: 'Викторовна',
			surname: 'Смирнова',
			city: 'Санкт-Петербург',
			email: 'smirnova2001@mail.ru',
			phone: '+7914-564-66-44',
			description: '<span>Врач педиатр высшей квалификационной категории, врач психотерапевт, клинический психолог, кандидат психологических наук, доцент Амурского государственного университета и Севастопольского государственного университета. Тренер Международной Академии Позитивной Психотерапии, IAPP (Висбаден, Германия) <a>http://positum.org/training/trainers/</a>, действительный член  Всемирной ассоциации позитивной психотерапии (WAPP). Супервизор Российской психотерапевтической Ассоциации. <a>https://rpa-russia.ru/sovet-supervizorov-rpa/</a></span>',
			id: "6497237355aef7adde8b3581",
		},
		{
			name: 'Oksana',
			second_name: '',
			surname: 'Nikonova',
			city: '',
			email: '',
			phone: '',
			description: '',
			id: '64972d429bd3eac606b8f35e'
		},
		{
			name: 'Ekaterina',
			second_name: '',
			surname: 'Dokunova',
			city: '',
			email: '',
			phone: '',
			description: '',
			id: "64972d7ca74dcb4dd4eed4ae",
		},
	];
	console.log('trainers', trainers);
	console.log('people', params);
	return (
		<div>news uuid page - {params.uuid}
			<div>
				{trainers.map(trainer => {
					return (
						<div key={trainer.id}>
							<div>
								<Link href={`/people/${trainer.id}`}><Image src={`/images/avatars/${trainer.id}`} width={300} height={300}
								             alt={`${trainer.surname} ${trainer.surname} ${trainer.second_name}`} /></Link>
							</div>
							<div><Link href={`/people/${trainer.id}`} >{trainer.surname} {trainer.surname} {trainer.second_name}</Link></div>
							<div>{trainer.description}</div>
							<div>Контакты: <a href={`tel:${trainer.phone}`}>{trainer.phone}</a>, email: <a href={`mailto:${trainer.email}`}>{trainer.email}</a></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
	export default PeoplePage;
