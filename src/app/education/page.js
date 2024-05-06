'use client';
import TopHeader from '@/components/TopHeader';
import { constants } from '@/constants';
import { DescriptionPopup } from '@/components/descripton-popup';
import { sagaActions } from '@/components/sagaActions';
import { TableComponent } from '@/semantic-ui/components/table';
import moment from 'moment';
import { COLUMNS, filterNamesToColumns } from '@/app/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';

const getThem = (type, them) => {
	if (type === 'basic_course') {
		return constants.base_themes[them];
	}
	return constants.master_themes[them];
};

const StudyPage = () => {
	const isTableDataLoading = useSelector(state => state.main.isTableDataLoading);
	const isDescriptionPopupShow = useSelector(state => state.main.isDescriptionPopupShow);
	const cities = useSelector(state => state.main.cities);
	const trainers = useSelector(state => state.main.trainers);
	const sorting = useSelector(state => state.main.sorting);
	const checkboxFilters = useSelector(state => state.main.checkboxFilters);
	const fromFilter = useSelector(state => state.main.from);
	const toFilter = useSelector(state => state.main.to);
	const seminars = useSelector((state) => {
		const line = [];
		state.main.seminars.forEach(seminar => {
			const trainer = trainers[seminar.trainer];
			let organizer;
			let contacts = {};
			if (trainers[seminar.organizer]) {
				const user = trainers[seminar.organizer];
				organizer = `${user.surname} ${user.name}`;
				contacts = {
					phone: user.phone,
					email: user.email,
				};
			} else {
				organizer = `${seminar.organizer}`;
				contacts = { text: seminar.organizer_contacts };
			}
			line.push({
				trainer: `${trainer?.surname} ${trainer?.name}`,
				city: cities[seminar.city] || '-',
				type: `Семинар - ${seminar.title}`,
				module: `Семинар - продолжительность: ${seminar.count} ч.; Тип - ${seminar.type}`,
				description: seminar.description,
				organizer: organizer,
				contacts,
				dates: seminar?.dates?.join(', ') || 'Не известно',
				isActiveRow: false,
				withCourseType: 'seminar',
				withCity: seminar.city,
				withDates: seminar?.dates || [],
				withTrainer: seminar.trainer,
			});
		});
		return line;
	});
	const courses = useSelector((state) => {
		const line = [];
		state.main.courses.forEach(course => {
			course?.modules?.forEach(module => {
				const main_trainer = trainers[course.main_trainer];
				const trainer = trainers[module.trainer];
				let organizer;
				let contacts = {};
				if (trainers[course.organizer]) {
					const user = trainers[course.organizer];
					organizer = `${user.surname} ${user.name}`;
					contacts = {
						phone: user.phone,
						email: user.email,
					};
				} else {
					organizer = `${course.organizer}`;
					contacts = { text: course.organizer_contacts };
				}
				let type = `${constants.types[course.type]}`;
				if (course.title) {
					type += ` - ${course.title}`;
				} else {
					const firstDate = course.modules[0].dates[0];
					const lastDate = course.modules[course.modules.length - 1].dates.at(-1);
					type += ` - ${firstDate} - ${lastDate}`;
				}

				line.push({
					...module,
					trainer: `${trainer?.surname} ${trainer?.name}`,
					main_trainer: `${main_trainer?.surname} ${main_trainer?.name}`,
					city: cities[course.city] || '-',
					type,
					module: getThem(course.type, module.them),
					description: course.description,
					organizer: organizer,
					contacts,
					dates: module?.dates?.join(', ') || 'Не известно',
					isActiveRow: false,
					withCourseType: course.type,
					withModule: module.them,
					withCity: course.city,
					withDates: module?.dates || [],
					withTrainer: module.trainer,
				});
			});
		});
		return line;
	});
	const dispatch = useDispatch();

	const tableData = [].concat(seminars, courses);
	const filteredCheckboxFilter = Object.entries(checkboxFilters).reduce((acc, [key, valObj]) => {
		Object.entries(valObj).map(([i, j]) => {
			if (j) {
				if (acc[key]) {
					acc[key].push(i);
				} else {
					acc[key] = [i];
				}

			}
		});
		return acc;
	}, {});
	const filteredTableData = (Object.keys(filteredCheckboxFilter).length || fromFilter || toFilter) ? tableData.reduce(
		(acc, item) => {
			let temp = true;
			Object.entries(filteredCheckboxFilter)?.forEach(([filterName, filter]) => {
				if (!filter.includes(item[filterName])) {
					temp = false;
				}
			});
			let timeInFilter = false;
			if (fromFilter && toFilter) {
				item.withDates?.forEach(item => {
					if (
						moment(item, 'DD-MM-YYYY').isBetween(fromFilter, toFilter, undefined, '[]')
					) {
						timeInFilter = true;
					}
				});
			} else if (fromFilter) {
				item.withDates?.forEach(item => {
					if (
						moment(item, 'DD-MM-YYYY').isSameOrAfter(fromFilter)
					) {
						timeInFilter = true;
					}
				});
			} else if (toFilter) {
				item.withDates?.forEach(item => {
					if (
						moment(item, 'DD-MM-YYYY').isSameOrBefore(toFilter)
					) {
						timeInFilter = true;
					}
				});
			}
			if ((fromFilter || toFilter) && !timeInFilter) {
				temp = false;
			}
			if (temp) {
				acc.push(item);
			}
			return acc;
		},
		[]) : tableData;


	useEffect(() => {
		dispatch({ type: sagaActions.GET_COURSES });
		dispatch({ type: sagaActions.GET_CENTERS });
		dispatch({ type: sagaActions.GET_SEMINARS });
		dispatch({ type: sagaActions.GET_TRAINERS });
		dispatch({ type: sagaActions.GET_CITIES });
	}, []);


	return (
		<div className="">
			<TopHeader />
			<Loader active={isTableDataLoading} />
			<div className="table-content__content">
				<TableComponent
					columns={COLUMNS}
					rows={filteredTableData}
					isTableFixed
					isScroll
				/>
			</div>
			{isDescriptionPopupShow && <DescriptionPopup />}
		</div>
	);
};
export default StudyPage;