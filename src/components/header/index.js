'use client';
import { COLUMNS } from '@/app/constants';
import LinkWithActive from '@/components/linkWithActive';
import { setCheckboxFiltersAction, setIsMobileAction } from '@/components/store/store';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../images/logo.svg';
import './header.scss';

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const dispatch = useDispatch();
	const onSetCheckboxFilters = (...params) => dispatch(setCheckboxFiltersAction(...params));

	useEffect(() => {
		if (window.innerWidth < 960) {
			dispatch(setIsMobileAction(true));
			setIsMobile(true);
		}
	}, []);

	const toggleMenu = () =>{
		if (isMobile){
			setIsMenuOpen(!isMenuOpen)
		}
	}
	const setCheckboxFilters = value => {
		const resetFilters = COLUMNS.reduce((acc, val) => {
			if (val.filterName) {
				acc[val.filterName] = {};
			}
			return acc;
		}, {});
		if (value) {
			onSetCheckboxFilters({
				...resetFilters,
				'withCourseType': {
					[value]: true,
				},
			});
		} else {
			onSetCheckboxFilters(resetFilters);
		}
		toggleMenu()
	};


	return (
		<nav>
			<input id="menu__toggle" type="checkbox" checked={isMenuOpen} />
			<label className="menu__btn" htmlFor="menu__toggle" onClick={toggleMenu}>
				<span></span>
			</label>
			<ul className="topmenu">
				<li>
					<LinkWithActive  onClick={toggleMenu} href="/about">О методе<span className="fa fa-angle-down"></span></LinkWithActive>
					<ul className="submenu">
						<li><LinkWithActive  onClick={toggleMenu} href="/about">О методе</LinkWithActive></li>
						<li><LinkWithActive  onClick={toggleMenu} href="/about/magazin">Журнал «Global psychotherapist»</LinkWithActive></li>
						<li><LinkWithActive  onClick={toggleMenu} href="/about/pezeshkian">Н. Пезешкиан</LinkWithActive></li>
					</ul>
				</li>
				<li><LinkWithActive  onClick={toggleMenu} href="/education">Обучение<span
					className="fa fa-angle-down"></span></LinkWithActive>
					<ul className="submenu">
						<li>
							<LinkWithActive  onClick={toggleMenu} href="/education">обучение ППТ<span
								className="fa fa-angle-down"></span></LinkWithActive>
							<ul className="submenu">
								<li><LinkWithActive  onClick={toggleMenu} href="/education"
								                    onClick={() => setCheckboxFilters('basic_course')}>Базовый
									курс</LinkWithActive></li>
								<li><LinkWithActive href="/education"
								                    onClick={() => setCheckboxFilters('master_course')}>Мастер
									курс</LinkWithActive></li>
								<li><LinkWithActive href="/education"
								                    onClick={() => setCheckboxFilters('master_class')}>Мастер-классы</LinkWithActive>
								</li>
							</ul>
						</li>
						<li>
							<LinkWithActive href="/education" onClick={() => setCheckboxFilters('additional_program')}>Дополнительные
								программы<span
									className="fa fa-angle-down"></span></LinkWithActive>
							<ul className="submenu">
								<li>
									<LinkWithActive href="/education"
									                onClick={() => setCheckboxFilters('conference')}>Конференции</LinkWithActive>
								</li>
								<li>
									<LinkWithActive href="/education"
									                onClick={() => setCheckboxFilters('seminar')}>Семинары</LinkWithActive>
								</li>
							</ul>
						</li>
						<li>
							<LinkWithActive href="/education" onClick={() => setCheckboxFilters(false)}>Все
								курсы</LinkWithActive></li>
					</ul>
				</li>
				<li className="logoBlock">
					<LinkWithActive  onClick={toggleMenu} href="/">
						<Image className="logo" src={Logo} alt="Picture of the author" />
						<p className="logoText">Главная</p>
					</LinkWithActive>
				</li>
				<li>
					<LinkWithActive  onClick={toggleMenu} href="/people">Сообщество<span
						className="fa fa-angle-down"></span>
					</LinkWithActive>
					<ul className="submenu">
						<li>
							<LinkWithActive  onClick={toggleMenu} href="/centers">
								центры
							</LinkWithActive>
						</li>
						<li>
							<LinkWithActive  onClick={toggleMenu} href="/people">
								люди<span className="fa fa-angle-down"></span>
							</LinkWithActive>
							<ul className="submenu">
								<li><LinkWithActive  onClick={toggleMenu} href="/people/russian_ppt_trainers">российские тренеры
									ППТ</LinkWithActive></li>
								<li><LinkWithActive  onClick={toggleMenu} href="/people/certified_therapists">сертифицированные терапевты
									ППТ</LinkWithActive></li>
							</ul>
						</li>
						<li><LinkWithActive  onClick={toggleMenu} href="/ethical_committee">этический комитет</LinkWithActive></li>
						<li><LinkWithActive  onClick={toggleMenu} href="https://www.positum.org/" target="_blank">Всемирная Ассоциация
							ППТ</LinkWithActive></li>
						<li>
							<LinkWithActive  onClick={toggleMenu} href="/login">
								Тренерам
							</LinkWithActive>
						</li>
					</ul>
				</li>
				<li><LinkWithActive  onClick={toggleMenu} href="/regulations">Регламенты<span
					className="fa fa-angle-down"></span></LinkWithActive>
					<ul className="submenu">
						<li><LinkWithActive  onClick={toggleMenu} href="/standards">стандарты обучения</LinkWithActive></li>
						<li><LinkWithActive  onClick={toggleMenu} href="/code_of_ethics">этический кодекс</LinkWithActive></li>
						<li><LinkWithActive  onClick={toggleMenu} href="/faq">FAQ</LinkWithActive></li>
					</ul>
				</li>
			</ul>
		</nav>
	);
};

export default Header;