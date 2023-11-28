import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export default function DayPickerView({input, }) {
	const { value, onChange, ...restInput } = input;
	const handleChange = (val) =>{
		const temp = val.map(item => format(item, 'dd.MM.yyyy'))
		onChange(temp)
	}
	const valueFormat = () =>{
		if (value){
			return value.map(item => {
				const dates = item.split('.')
				return new Date(`${dates[1]}/${dates[0]}/${dates[2]}`)
			})
		}
		return []
	}
	return (
		<DayPicker
			{...restInput}
			mode="multiple"
			min={1}
			selected={valueFormat()}
			onSelect={handleChange}
			showOutsideDays
			fixedWeeks
			ISOWeek
		/>
	);
}