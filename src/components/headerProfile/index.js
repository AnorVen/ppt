'use client';
import './header.scss';
import LinkWithActive from '@/components/linkWithActive';
import { getSuperUser, getToken } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HeaderProfile = () => {
	const router = useRouter();
	useEffect(()=>{
		if (!true){
			router.push('/login');
		}
	}, [router])

	return (
		<nav>
			<ul className="topmenu">
				<li>
					<LinkWithActive href="/profile">
						Информация о себе
					</LinkWithActive>
				</li>
				<li>
					<LinkWithActive href="/profile/courses">
						Добавление курсов
					</LinkWithActive>
				</li>

				{getSuperUser() &&
					<li>
						<LinkWithActive href="/add">Добавить тренеров и центры</LinkWithActive>
					</li>
				}
			</ul>
		</nav>
	);
}

export default HeaderProfile
