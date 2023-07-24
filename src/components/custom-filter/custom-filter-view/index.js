import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Icon } from '@/semantic-ui/components/icon';
import { CustomDropdown } from '@/semantic-ui/components/custom-dropdown';
import { FilterDropdownContent } from '../../filter-dropdown-content';

const CustomFilterView = ({
	onSetSorting,
	columnData,
	sortingDirection,
	iconColor,
	onSetDropdownOpen,
	isDropdownOpen,
	isDropdownIconVisible,
}) => {
	return (
		<div className="custom-filter">
			<div className="custom-filter__title" onClick={onSetSorting} data-testid="title">
				<div className="custom-filter__title-text">{columnData.name}</div>
				{sortingDirection && (
					<div className="custom-filter__sorting">
						<Icon name={sortingDirection === 'asc' ? 'sorting-asc' : 'sorting-desc'} />
					</div>
				)}
			</div>
			{isDropdownIconVisible && (
				<div className="custom-filter__filter">
					<CustomDropdown
						icon={<Icon name="caret-down" size="big" active={Boolean(iconColor)} />}
						dropdownContent={<FilterDropdownContent columnData={columnData} />}
						isOpen={isDropdownOpen}
						onOpenChange={onSetDropdownOpen}
						alignLeft={columnData.alignLeft}
					/>
				</div>
			)}
		</div>
	);
};

CustomFilterView.propTypes = {
	sortingDirection: PropTypes.string,
	columnData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		customComponent: PropTypes.elementType,
	}).isRequired,
	onSetSorting: PropTypes.func.isRequired,
	iconColor: PropTypes.string,
	onSetDropdownOpen: PropTypes.func.isRequired,
	isDropdownOpen: PropTypes.bool.isRequired,
	isDropdownIconVisible: PropTypes.bool.isRequired,
};

export { CustomFilterView };
