'use client'
import './style.scss'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import store from '@/components/store/store'
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
		<Provider store={store}>
		<section>
			<div className='educationLayout wrapper_text'>
				{types.map(type =>{
					return (<Link key={type.key} href={`/education${type.key}`} className='educationLayout__btn'>{type.text}</Link>)
				})
				}
			</div>
			{children}
		</section>
		</Provider>
	);
}