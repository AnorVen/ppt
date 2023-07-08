'use client'
import './style.scss'
import { useRouter } from 'next/navigation';
export default function EducationLayout({ children }) {
	const types = [
		{
		key: '/basic_course',
		text: 'Базовый курс'
	}, {
		key: '/master_course',
		text: 'Мастер курс'
	}, {
		key: '/master_classes',
		text: 'Мастер-классы'
	}, {
		key: '/additional_programs',
		text: 'Дополнительные программы'
	}, {
		key: '/conferences',
		text: 'Конференции'
	}, {
		key: '/',
		text: 'Все курсы'
	}]

	const router = useRouter();
	return (
		<section>
			<div className='educationLayout wrapper_text'>
				{types.map(type =>{
					return <button className='educationLayout__btn' key={type.key}
					               onClick={()=>router.push(`/education${type.key}`)}>
						{type.text}
					</button>
				})
				}
			</div>
			{children}
		</section>
	);
}