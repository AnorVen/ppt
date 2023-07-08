import { DateTime } from 'luxon';
import './style.scss'
import {
	trainers,
	courses,
	master_thems,
	base_thems,
	centers,
	seminars
} from '@/bd'
import Link from 'next/link';

export const CalendarPopup = ({onClosePopup, date}) => {
	const { year, month, day } = date
	const selectDate = DateTime.fromObject({
		year,
		month: month + 1,
		day
	}).toLocaleString({
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	})
	const meetings_courses = courses.filter(item => {
		const dates = item.modules.map(item => item.dates)
		return dates.includes(selectDate)
	}).map(item => {
		item.variant = 'courses'
		return item
	})

	const meetings_seminars = seminars.filter(item => item.dates.includes(selectDate)).map(item => {
		item.variant = 'seminars'
		return item
	})
	const meetings = meetings_seminars.concat(meetings_courses)

	return <div className="popup">
		<div className="close-popup" onClick={onClosePopup}/>
		<div className="popup--content">
			{meetings.map(meet =>{
				return <div key={meet.id} className='popup--meet'>
					<Link href={`/${meet.variant}/${meet.id}`}>
						<div className='popup--meet-title'>{meet.title}</div>
					</Link>

					<div>
						<span>Даты</span>:
						{ meet.dates.join(', ')}
					</div>

				</div>
			})}
		</div>
	</div>;
};