'use client';
import { useMemo } from 'react';

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
	const days = useMemo(() => {
		const temp = [[]];
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
				temp.push([]);
			}
			if ((index < start_day) || (index >= (total_days + start_day))) {
				temp[week].push({
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
				temp[week].push({
					className: class_name,
					content: day,
					date: { day, month, year },
				});
				day++;
			}
		}
		return temp;
	}, [year, month, selectedDate]);

	return (
		<table className="calendar" cellSpacing="0" cellPadding="0">
			<thead>
			<tr>
				<th colSpan={7} className="calendar-month-title">{monthName}</th>
			</tr>
			<tr>
				{dayName.map(day => (<th key={day}>{day}</th>))}
			</tr>
			</thead>
			<tbody>
			{days.map((week, i) => {
				return !!week.length && <tr key={`week-${week[0]?.day}-${month}-${year}-${i}${i}`}
				                            data-key={`week-${week[0]?.day}-${month}-${year}-${i}${i}`}
				                            className="calendar-week">
					{week.map(({ className, content, date }, index) => {
						return <td data-day={`${date.day}-${date.month}-${date.year}-${index}`}
						           key={content} className={`calendar-day ${className}`}
						           onClick={() => onSelectDay(date)}
						>{content}
						</td>;
					})}
				</tr>;
			})}
			</tbody>
		</table>
	);
};

export default Calendar;