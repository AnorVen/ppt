'use client'
import '../../app/education/style.scss';
import { COLUMNS } from '@/app/constants';
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