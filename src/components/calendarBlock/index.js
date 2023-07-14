'use client';

import Calendar from '@/components/calendar';
import { CalendarPopup } from '@/components/calendar-popup';
import { useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import './style.scss';

export const CalendarBlock = () => {
	const [selectedDate, onSelectDate] = useState({
		day: null,
		month: null,
		year: null,
	});

	const [isPopupShow, setIsPopupShow] = useState(false);
	const handleSelectDay = (date) => {
		if (
			date.day !== selectedDate.day
			|| date.month !== selectedDate.month
			|| selectedDate.year !== date.year
		) {
			onSelectDate(date);
			setIsPopupShow(true);
		} else {
			onSelectDate({
				day: null,
				month: null,
				year: null,
			});
			setIsPopupShow(false);
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
		{isPopupShow && <CalendarPopup
			onClosePopup={() => setIsPopupShow(false)}
			date={selectedDate}
		/>
		}
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			modules={[Navigation, A11y]}
			navigation
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