'use client';
import { COLUMNS } from '@/app/constants';
import { setCheckboxFiltersAction, setIsMobileAction } from '@/components/store/store';
import Image from 'next/image';
import './header.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../images/logo.svg';
import LinkWithActive from '@/components/linkWithActive';

const Header = () => {
	const dispatch = useDispatch();
	const onSetCheckboxFilters = (...params) => dispatch(setCheckboxFiltersAction(...params));

	useEffect(()=>{
		if (window.innerWidth < 960){
			dispatch(setIsMobileAction(true))
		}
	}, [])

	const setCheckboxFilters = value => {
		const resetFilters = COLUMNS.reduce((acc, val)=> {
			if (val.filterName){
				acc[val.filterName] = {}
			}
			return acc
		},{})
		if (value){
			onSetCheckboxFilters({
				...resetFilters,
				'withCourseType': {
					[value]: true
				},
			})
		} else {
			onSetCheckboxFilters(resetFilters)
		}
	}
	return (
		<nav>
			<ul className="topmenu">
				<li><LinkWithActive href="/about">О методе<span className="fa fa-angle-down"></span></LinkWithActive>
					<ul className="submenu">
						<li><LinkWithActive href="/about">О методе</LinkWithActive></li>
						<li><LinkWithActive href="/about/magazin">Журнал «Global psychotherapist»</LinkWithActive></li>
						<li><LinkWithActive href="/about/pezeshkian">Н. Пезешкиан</LinkWithActive></li>
					</ul>
				</li>
				<li><LinkWithActive href="/education">Обучение<span className="fa fa-angle-down"></span></LinkWithActive>
					<ul className="submenu">
						<li>
							<LinkWithActive href="/education">обучение ППТ<span
							className="fa fa-angle-down"></span></LinkWithActive>
							<ul className="submenu">
								<li><LinkWithActive href="/education"  onClick={()=>setCheckboxFilters('basic_course')}>Базовый курс</LinkWithActive></li>
								<li><LinkWithActive href="/education" onClick={()=>setCheckboxFilters('master_course')}>Мастер курс</LinkWithActive></li>
								<li><LinkWithActive href="/education"  onClick={()=>setCheckboxFilters('master_class')}>Мастер-классы</LinkWithActive></li>
							</ul>
						</li>
						<li>
							<LinkWithActive href="/education" onClick={()=>setCheckboxFilters('additional_program')}>Дополнительные программы<span
								className="fa fa-angle-down"></span></LinkWithActive>
							<ul className="submenu">
								<li>
									<LinkWithActive href="/education" onClick={()=>setCheckboxFilters('conference')}>Конференции</LinkWithActive>
								</li>
								<li>
									<LinkWithActive href="/education" onClick={()=>setCheckboxFilters('seminar')}>Семинары</LinkWithActive>
								</li>
							</ul>
						</li>
						<li><LinkWithActive href="/education"  onClick={()=>setCheckboxFilters(false)}>Все курсы</LinkWithActive></li>
					</ul>
				</li>
				<li>
					<LinkWithActive href="/">
						<Image className="logo" src={Logo} alt="Picture of the author" />
					</LinkWithActive>
				</li>
				<li><LinkWithActive href="/community">Сообщество<span className="fa fa-angle-down"></span></LinkWithActive>
					<ul className="submenu">
						<li>
							<LinkWithActive href="/centers">
								центры
							</LinkWithActive>
						</li>
						<li>
							<LinkWithActive href="/people">
								люди<span className="fa fa-angle-down"></span>
							</LinkWithActive>
							<ul className="submenu">
								<li><LinkWithActive href="/people/russian_ppt_trainers">российские тренеры ППТ</LinkWithActive></li>
								<li><LinkWithActive href="/people/certified_therapists">сертифицированные терапевты ППТ</LinkWithActive></li>
							</ul>
						</li>
						<li><LinkWithActive href="/ethical_committee">этический комитет</LinkWithActive></li>
						<li><LinkWithActive href="https://www.positum.org/" target="_blank">Всемирная Ассоциация ППТ</LinkWithActive></li>
						<li>
							<LinkWithActive href="/login">
								Тренерам
							</LinkWithActive>
						</li>
					</ul>
				</li>
				<li><LinkWithActive href="/regulations">Регламенты<span className="fa fa-angle-down"></span></LinkWithActive>
					<ul className="submenu">
						<li><LinkWithActive href="/standards">стандарты обучения</LinkWithActive></li>
						<li><LinkWithActive href="/code_of_ethics">этический кодекс</LinkWithActive></li>
						<li><LinkWithActive href="/faq">FAQ</LinkWithActive></li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default Header