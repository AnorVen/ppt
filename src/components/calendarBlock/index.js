'use client';

import Calendar from '@/components/calendar';
import { useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import './style.scss';

export const ClaendaeBlock = () => {
	const [selectedDate, onSelectDate] = useState({
		day: null,
		month: null,
		year: null,
	});

	const handleSelectDay = (date) => {
		console.log(date);
		if (
			date.day !== selectedDate.day
			|| date.month !== selectedDate.month
			|| selectedDate.year !== date.year
		) {
			onSelectDate(date);
		} else {
			onSelectDate({
				day: null,
				month: null,
				year: null,
			});
		}
	};
	const monthesName = [
		'Январь', 'Февраль', 'Март', 'Апрель',
		'Май', 'Июнь', 'Июль', 'Август',
		'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
	];

	const years = useMemo(() => {
		const dt = DateTime.now();
		const year = dt.year;
		return [year, year + 1, year + 2, year + 3, year - 1];
	}, []);

	return <div className="calendar-block">
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			navigation
			pagination={{ clickable: true }}
			loop
		>

			{years.map(year => {
				return <SwiperSlide key={year}>
					<div className="calendar-slider">
						<p className="calendar-title">{year}</p>
						<div className="monthes">
							{monthesName.map((month, index) => {
								return <Calendar key={`${year}-${month}`} year={year} month={index}
								                 onSelectDay={handleSelectDay} selectedDate={selectedDate}
								                 monthName={month}
								/>;
							})}
						</div>
					</div>
				</SwiperSlide>;
			})
			}
		</Swiper>
	</div>;

};