import './style.scss';
import Link from 'next/link';

export default function EducationLayout({ children }) {
	const types = [
		{
			key: '/basic_course',
			text: 'Базовый курс',
		}, {
			key: '/master_course',
			text: 'Мастер курс',
		}, {
			key: '/master_classes',
			text: 'Мастер-классы',
		}, {
			key: '/additional_programs',
			text: 'Дополнительные программы',
		}, {
			key: '/conferences',
			text: 'Конференции',
		}, {
			key: '/',
			text: 'Все курсы',
		}];

	return (
		<section>
			<div className="educationLayout wrapper_text">
				{types.map(type => {
					return (<Link key={type.key} href={`/education${type.key}`}
					              className="educationLayout__btn">{type.text}</Link>);
					})
				}
			</div>
			{children}
		</section>
	);
}