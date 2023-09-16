'use client'
import '../../app/education/style.scss';
import { setCheckboxFiltersAction } from '@/components/store/store';
import { constants } from '@/constants';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import "./style.scss"
const TopHeader = () => {
	const dispatch = useDispatch();
	const onSetCheckboxFilters = (...params) => dispatch(setCheckboxFiltersAction(...params));
	const types = Object.entries(constants.types).reduce((acc, [key, val]) => {
		acc.push({ key: key, value: key, text: val });
		return acc;
	}, [{
		value: false,
		text: 'Все курсы',
	}]);
	const checkboxFilters = useSelector((state) => state.main.checkboxFilters);

	const setCheckboxFilters = value => {
		if (value){
			onSetCheckboxFilters({
				...checkboxFilters,
				'withCourseType': {
					[value]: true
				},
			})
		} else {
			onSetCheckboxFilters({
				...checkboxFilters,
				'withCourseType': {},
			})
		}

	}
	return (
		<section>
			<div className="educationTop">
				{types.map(type => {
					return (<Button key={type.key} onClick={()=> setCheckboxFilters(type.value)}
					              className="educationTop__btn">{type.text}</Button>);
					})
				}
			</div>
		</section>
	);
}

export default TopHeader