import { FilterDateRange } from '@/components/filter-dropdown-content/filter-date';
import { sagaActions } from '@/components/sagaActions';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CheckboxList } from '@/semantic-ui/components/checkbox-list';
import {
	setCheckboxFiltersAction,
	setCheckboxListSearchAction,
	setFilterSearchAction,
	setFrom,
	setTo,
} from '@/components/store/store';
import { FilterSearchType, OptionsType } from '../prop-types';

export const FilterDropdownContentWrapper = ({
	                                             columnData,
                                             }) => {
	const dispatch = useDispatch();
	const onSetFilterSearch = (...params) => dispatch(setFilterSearchAction(...params));
	const onSetFrom = (...params) => dispatch(setFrom(...params));
	const onSetTo = (...params) => dispatch(setTo(...params));
	const onGetCoursesList = () => dispatch({ type: sagaActions.GET_COURSES });
	const onSetCheckboxFilters = (...params) => dispatch(setCheckboxFiltersAction(...params));
	const onSetCheckboxListSearch = (...params) => dispatch(setCheckboxListSearchAction(...params));
	const checkboxFilters = useSelector((state) => state.main.checkboxFilters);
	const from = useSelector((state) => state.main.from);
	const to = useSelector((state) => state.main.to);


	const checkboxListSearch = useSelector((state) => state.main.checkboxListSearch);
	const chosenOptions = useSelector(() => {
		return Object.keys(checkboxFilters).reduce((result, key) => {
			result[key] = Object.entries(checkboxFilters[key]).reduce((prev, [key, value]) => {
				if (value) {
					prev[key] = value;
				}
				return prev;
			}, {});
			return result;
		}, {});
	});
	const options = useSelector((state) =>{
		const options = {}
		const checkboxListOptions = state.main.checkboxListOptions
		console.log('checkboxListSearch', checkboxListSearch);
		console.log('checkboxListOptions', checkboxListOptions);
		Object.entries(checkboxListOptions).forEach(([key, val]) => {
			console.log(checkboxListSearch[key]);
			console.log(val);

			options[key] = val.reduce((acc, { uuid, text })=>{
				if (text.toLowerCase().includes(checkboxListSearch[key].toLowerCase())) {
					acc.push({ value: uuid, text: text, key: uuid });
				}
				return acc;
			}, [])
		})
		return options
	});
	console.log(options);
	console.log(checkboxFilters);
	const checkedCount = useSelector((state) => {
		return Object.entries(options).reduce((result, [key]) => {
			console.log(key);
			result[key] = Object.values(checkboxFilters[key]).filter(Boolean).length;
			return result;
		}, {});
	});

	const isAllChecked = useSelector((state) => {
		return Object.entries(options).reduce((result, [key, values]) => {
			result[key] = values.length === checkedCount[key] && values.length !== 0;
			return result;
		}, {});

	});

	const handleCheckboxListSearchChange = ({ target: { value } }) => {
		onSetCheckboxListSearch({ ...checkboxListSearch, [columnData.filterName]: value });
	};

	const handleCheckboxChange = option => {
		onSetCheckboxFilters({
			...checkboxFilters,
			[columnData.filterName]: {
				...checkboxFilters[columnData.filterName],
				[option.value]:
				// In columns with double list must be saved the whole information
				// For others true/false is enough
					!checkboxFilters[columnData.filterName][option.value] && columnData.id === 'unit_uuid'
						? option
						: !checkboxFilters[columnData.filterName][option.value],
			},
		});
		onGetCoursesList();
	};

	const handleAllOptionsSelect = () => {
		onSetCheckboxFilters({
			...checkboxFilters,
			[columnData.filterName]: {
				...options[columnData.filterName].reduce(
					(acc, option) => ({
						...acc,
						[option.value]:
							!isAllChecked[columnData.filterName] && columnData.id === 'unit_uuid'
								? option
								: !isAllChecked[columnData.filterName],
					}),
					{},
				),
			},
		});
		onGetCoursesList();
	};

	if (columnData.id !== 'dates') {
		return (
			<CheckboxList
				choosenOptions={chosenOptions[columnData.filterName]}
				onCheckboxChange={handleCheckboxChange}
				options={options[columnData.filterName] || []}
				hasFooter
				isSearch
				isCount
				isAllChecked={isAllChecked[columnData.filterName]}
				checkedCheckboxListLength={checkedCount[columnData.filterName]}
				onSliderCheckboxChange={handleAllOptionsSelect}
				onSearchChange={handleCheckboxListSearchChange}
			/>
		);
	}

	return <FilterDateRange value={
		{
			from,
			to,
		}
	} onDateRangeChange={(e, type) => {
		const value = e.target.value || null;
		if (type === 'from') {
			onSetFrom(value);
		} else {
			onSetTo(value);
		}
	}} />;
};

const FilterDropdownContent = connect(null, null)(FilterDropdownContentWrapper);

FilterDropdownContentWrapper.propTypes = {
	columnData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		customComponent: PropTypes.elementType,
		filterName: PropTypes.string,
	}).isRequired,
	filterSearch: FilterSearchType,
	onSetFilterSearch: PropTypes.func.isRequired,
	onGetCoursesList: PropTypes.func.isRequired,
	onSetCheckboxFilters: PropTypes.func.isRequired,
	chosenOptions: PropTypes.shape({
		withActive: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
		withPinned: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
	}).isRequired,
	checkboxFilters: PropTypes.shape({
		withActive: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
		withPinned: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
	}).isRequired,
	checkedCount: PropTypes.shape({
		withActive: PropTypes.number.isRequired,
		withPinned: PropTypes.number.isRequired,
	}).isRequired,
	isAllChecked: PropTypes.shape({
		withActive: PropTypes.bool.isRequired,
		withPinned: PropTypes.bool.isRequired,
	}).isRequired,
	options: PropTypes.shape({
		withActive: OptionsType,
		withPinned: OptionsType,
	}).isRequired,
};

export { FilterDropdownContent };
