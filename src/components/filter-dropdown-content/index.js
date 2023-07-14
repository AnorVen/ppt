import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { CheckboxList } from '@/semantic-ui/components/checkbox-list';
import { FilterSearch } from './filter-search';
import {
	getCheckboxFiltersSelector,
	getCheckboxListOptionsSelector,
	getCheckedOptionsCountSelector,
	getCheckedOptionsSelector,
	getFilterSearchSelector,
	getIsAllOptionsCheckedSelector,
} from '@/components/selectors';
import { getCourseAction, setCheckboxFiltersAction, setFilterSearchAction } from '@/components/actions';
import { FilterSearchType, OptionsType } from '../prop-types';

export const FilterDropdownContentWrapper = ({
	columnData,
	filterSearch,
	onSetFilterSearch,
	chosenOptions,
	checkedCount,
	options,
	isAllChecked,
	onGetNewsList,
	onSetCheckboxFilters,
	checkboxFilters,
}) => {
	const handleFilterSearchChange = ({ target: { value } }) => {
		onSetFilterSearch({ ...filterSearch, [columnData.id]: value });
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
		onGetNewsList();
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
		onGetNewsList();
	};

	if (columnData.id === 'is_active' || columnData.id === 'is_pinned') {
		return (
			<CheckboxList
				choosenOptions={chosenOptions[columnData.filterName]}
				onCheckboxChange={handleCheckboxChange}
				options={options[columnData.filterName]}
				hasFooter
				isCount
				isAllChecked={isAllChecked[columnData.filterName]}
				checkedCheckboxListLength={checkedCount[columnData.filterName]}
				onSliderCheckboxChange={handleAllOptionsSelect}
			/>
		);
	}

	return <FilterSearch searchValue={filterSearch[columnData.id]} onSearchValueChange={handleFilterSearchChange} />;
};

const mapStateToProps = createStructuredSelector({
	filterSearch: getFilterSearchSelector(),
	chosenOptions: getCheckedOptionsSelector(),
	checkedCount: getCheckedOptionsCountSelector(),
	options: getCheckboxListOptionsSelector(),
	isAllChecked: getIsAllOptionsCheckedSelector(),
	checkboxFilters: getCheckboxFiltersSelector(),
});

const mapDispatchToProps = {
	onSetFilterSearch: setFilterSearchAction,
	onGetNewsList: getCourseAction,
	onSetCheckboxFilters: setCheckboxFiltersAction,
};

const FilterDropdownContent = connect(mapStateToProps, mapDispatchToProps)(FilterDropdownContentWrapper);

FilterDropdownContentWrapper.propTypes = {
	columnData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		customComponent: PropTypes.elementType,
		filterName: PropTypes.string,
	}).isRequired,
	filterSearch: FilterSearchType,
	onSetFilterSearch: PropTypes.func.isRequired,
	onGetNewsList: PropTypes.func.isRequired,
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
