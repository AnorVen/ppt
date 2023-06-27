import Image from 'next/image';
import Link from 'next/link';
import { bd } from '@/bd';
import './style.scss';

const PeoplePage = async ({ params }) => {
	const { trainers } = bd;
	return (
		<div className="wrapper_text">
			<div>
				{trainers.map(trainer => {
					return (
						<div key={trainer.id} className="trainers-item">
							<div className="avatar">
								<Link href={`/people/${trainer.id}`}>
									<Image src={`/images/avatars/${trainer.id}.png`} width={200} height={200}
									       alt={`${trainer.surname} ${trainer.surname} ${trainer.second_name}`} />
								</Link>
							</div>
							<div className="text-block">
								<div><Link
									href={`/people/${trainer.id}`}>{trainer.surname} {trainer.surname} {trainer.second_name}</Link>
								</div>
								<div dangerouslySetInnerHTML={{ __html: trainer.description }} />
								<div>Контакты: <a href={`tel:${trainer.phone}`}>{trainer.phone}</a>, email: <a
									href={`mailto:${trainer.email}`}>{trainer.email}</a></div>
							</div>

						</div>
					);
				})}
			</div>
		</div>
	);
};
export default PeoplePage;
