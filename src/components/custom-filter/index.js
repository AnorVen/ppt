import React, { useMemo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CustomFilterView } from './custom-filter-view';
import { setFilterSearchAction, setOpenedFilterDropdownIdAction, setSortingAction } from '@/components/actions';
import {
	getCheckboxFiltersSelector,
	getFilterSearchSelector,
	getIsFiltersVisibleSelector,
	getOpenedFilterDropdownIdSelector,
	getSortingSelector,
} from '@/components/selectors';
import { FilterSearchType } from '../prop-types';

export const CustomFilterWrapper = ({
	columnData,
	sorting,
	onSetSorting,
	onSetDropdownOpen,
	openedFilterDropdownId,
	filterSearch,
	isFiltersVisible,
	checkboxFilters,
}) => {
	const handleSetDropdown = () => {
		onSetDropdownOpen(openedFilterDropdownId === columnData.id ? '' : columnData.id);
	};

	const handleSortColumn = () => {
		onSetSorting({ column: columnData.id, direction: sorting.direction === 'asc' ? 'desc' : 'asc' });
	};

	const iconColor = useMemo(() => {
		// If the search line isn't empty
		const isLineFilled = filterSearch[columnData.id];

		// If the dropdown is open
		const isDropdownOpen = columnData.id === openedFilterDropdownId;

		const isCheckboxOptionCheck = Boolean(
			checkboxFilters[columnData.filterName] &&
				Object.values(checkboxFilters[columnData.filterName]).filter(item => item).length,
		);

		if (isLineFilled || isDropdownOpen || isCheckboxOptionCheck) {
			return 'red';
		}

		return null;
	}, [columnData.id, openedFilterDropdownId, filterSearch[columnData.id]]);

	const sortingDirection = useMemo(() => {
		return columnData.id === sorting.column ? sorting.direction : '';
	}, [columnData, sorting]);

	const isDropdownOpen = useMemo(() => {
		return columnData.id === openedFilterDropdownId;
	}, [columnData.id, openedFilterDropdownId]);

	return (
		<CustomFilterView
			sortingDirection={sortingDirection}
			columnData={columnData}
			onSetSorting={handleSortColumn}
			onSetDropdownOpen={handleSetDropdown}
			iconColor={iconColor}
			customFilterDropdownId={openedFilterDropdownId}
			isDropdownOpen={isDropdownOpen}
			isDropdownIconVisible={columnData.id !== 'timestamp' && isFiltersVisible}
		/>
	);
};

const mapStateToProps = createStructuredSelector({
	sorting: getSortingSelector(),
	openedFilterDropdownId: getOpenedFilterDropdownIdSelector(),
	filterSearch: getFilterSearchSelector(),
	isFiltersVisible: getIsFiltersVisibleSelector(),
	checkboxFilters: getCheckboxFiltersSelector(),
});

const mapDispatchToProps = {
	onSetDropdownOpen: setOpenedFilterDropdownIdAction,
	onSetSorting: setSortingAction,
	onSetFilterSearch: setFilterSearchAction,
};

const CustomFilter = connect(mapStateToProps, mapDispatchToProps)(CustomFilterWrapper);

CustomFilterWrapper.propTypes = {
	columnData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		customComponent: PropTypes.elementType,
		filterName: PropTypes.string,
	}).isRequired,
	sorting: PropTypes.shape({
		column: PropTypes.string,
		direction: PropTypes.string,
	}).isRequired,
	onSetSorting: PropTypes.func.isRequired,
	onSetDropdownOpen: PropTypes.func.isRequired,
	openedFilterDropdownId: PropTypes.string.isRequired,
	filterSearch: FilterSearchType,
	onSetFilterSearch: PropTypes.func.isRequired,
	isFiltersVisible: PropTypes.bool.isRequired,
	checkboxFilters: PropTypes.shape({
		withActive: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
		withPinned: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
	}).isRequired,
};

export { CustomFilter };
