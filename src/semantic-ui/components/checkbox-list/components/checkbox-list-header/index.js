'use client'
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../icon';
import SearchField from '../../../search-field';
import './styles.scss';

// eslint-disable-next-line react/display-name
const CheckboxListHeader = memo(
	({
		isFiltersOpenIcon,
		isFiltersOpenIconActive,
		onFiltersOpen,
		searchValue,
		onSearchChange,
		isFilterAddIcon,
		onAddIconClick,
	}) => {
		return (
			<div className="checkbox-list-header">
				{isFiltersOpenIcon && (
					<div
						className={`${
							isFiltersOpenIconActive
								? 'checkbox-list-header__icon checkbox-list-header__icon_active'
								: 'checkbox-list-header__icon'
						}`}
					>
						<Icon
							className="checkbox-list-header__icon"
							active={isFiltersOpenIconActive}
							name="filter"
							onClick={onFiltersOpen}
						/>
					</div>
				)}
				{isFilterAddIcon && (
					<Icon className="checkbox-list-header__icon" name="plus" onClick={onAddIconClick} />
				)}
				<div
					className={`${isFiltersOpenIcon && 'checkbox-list-header__search'} ${
						isFilterAddIcon && 'checkbox-list-header__search_size_small'
					}`}
				>
					<SearchField dark value={searchValue} isOpen onChange={onSearchChange} />
				</div>
			</div>
		);
	},
);

CheckboxListHeader.propTypes = {
	isFiltersOpenIcon: PropTypes.bool,
	isFiltersOpenIconActive: PropTypes.bool,
	onFiltersOpen: PropTypes.func,
	searchValue: PropTypes.string,
	onSearchChange: PropTypes.func.isRequired,
	isFilterAddIcon: PropTypes.bool,
	onAddIconClick: PropTypes.func,
};

export { CheckboxListHeader };
