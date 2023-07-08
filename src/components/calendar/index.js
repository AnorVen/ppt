'use client';
import { useMemo, useState } from 'react';

const Calendar = ({
	                  year = 2023,
	                  month = 7,
	                  selectedDate,
	                  onSelectDay,
	                  monthName,
                  }) => {
	const dayName = [
		'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС',
	];
	const days = [[]];
	const total_days = 32 - new Date(year, month, 32).getDate();
	let start_day = new Date(year, month, 1).getDay();
	if (start_day === 0) {
		start_day = 7;
	}
	start_day--;
	const final_index = Math.ceil((total_days + start_day) / 7) * 7;
	for (let day = 1, index = 0, week = 0; index < final_index; index++) {
		if (index && index % 7 === 0) {
			week++;
			days.push([]);
		}
		if ((index < start_day) || (index >= (total_days + start_day))) {
			days[week].push({
				className: 'grayed',
				content: '',
				date: { day: -start_day + index, month, year },
			});
		} else {
			let class_name = '';
			if (selectedDate.day === day &&
				selectedDate.month === month &&
				selectedDate.year === year) {
				class_name = 'selected';
			}
			days[week].push({
				className: class_name,
				content: day,
				date: { day, month, year },
			});
			day++;
		}
	}
	return (
		<table className="calendar" cellSpacing="0" cellPadding="0">
			<tr>
				<th colSpan={7} className="calendar-month-title">{monthName}</th>
			</tr>
			<tr>
				{dayName.map(day => (<th key={day}>{day}</th>))}
			</tr>
			{days.map(week => {
				return !!week.length && <tr key={`week-${week[0]?.day}-${month}-${year}`} className="calendar-week">
					{week.map(({ className, content, date }) => {
						return <td data-day={`${date.day}-${date.month}-${date.year}`}
						           key={content} className={`calendar-day ${className}`}
						           onClick={() => onSelectDay(date)}
						>{content}
						</td>;
					})}
				</tr>;
			})}
		</table>
	);
};

export default Calendar;