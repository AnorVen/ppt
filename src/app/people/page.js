import Image from 'next/image';
import Link from 'next/link';

const fetchTrainers = async () => {
	try {
		const url = process.env.URL || '';
		const res = await fetch(`${url}/api/trainers.list`, {
			method: 'POST',
		});
		const result = res.json();
		console.log('res', result);
		return result;
	}
	catch (err) {
		console.log(err);
	}

};

const PeoplePage = async ({ params }) => {
	const trainers = await fetchTrainers();
	return (
		<div>news uuid page - {params.uuid}
			<div>
				{trainers.map(trainer => {
					return (
						<div key={trainer.id}>
							<div>
								<Link href={`/people/${trainer.id}`}>
									<Image src={`/images/avatars/${trainer.id}`} width={300} height={300}
									       alt={`${trainer.surname} ${trainer.surname} ${trainer.second_name}`}
									/>
								</Link>
							</div>
							<div><Link
								href={`/people/${trainer.id}`}>{trainer.surname} {trainer.surname} {trainer.second_name}</Link>
							</div>
							<div>{trainer.description}</div>
							<div>Контакты: <a href={`tel:${trainer.phone}`}>{trainer.phone}</a>, email: <a
								href={`mailto:${trainer.email}`}>{trainer.email}</a></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default PeoplePage;
