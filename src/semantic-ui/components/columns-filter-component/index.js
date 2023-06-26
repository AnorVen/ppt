/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { CustomDropdown } from '../custom-dropdown';
import { CheckboxList } from '../checkbox-list';
import { Icon } from '../icon';

const ColumnsFilterComponent = ({
	isCheckboxListOpen,
	choosenOptions,
	onClickIcon,
	onCheckboxListOpen,
	options,
	onCheckboxChange,
	onSliderCheckboxChange,
	isAllChecked,
	name,
	height,
	hasFooter,
}) => {
	return (
		<div className="columns-filter">
			<CustomDropdown
				icon={
					<Icon
						name={name}
						className={`${isCheckboxListOpen && 'columns-filter__icon-active'} columns-filter__icon`}
						onClick={onClickIcon}
						active={isCheckboxListOpen}
					/>
				}
				isOpen={isCheckboxListOpen}
				onOpenChange={onCheckboxListOpen}
				alignCenter
				dropdownContent={
					<CheckboxList
						options={options}
						choosenOptions={choosenOptions}
						onCheckboxChange={onCheckboxChange}
						onSliderCheckboxChange={onSliderCheckboxChange}
						isAllChecked={isAllChecked}
						height={height || '270px'}
						hasFooter={hasFooter}
					/>
				}
			/>
		</div>
	);
};

ColumnsFilterComponent.propTypes = {
	choosenOptions: PropTypes.objectOf(PropTypes.bool),
	isCheckboxListOpen: PropTypes.bool,
	onClickIcon: PropTypes.func,
	onCheckboxListOpen: PropTypes.func,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			text: PropTypes.string,
			key: PropTypes.string,
		}),
	),
	onCheckboxChange: PropTypes.func,
	onSliderCheckboxChange: PropTypes.func,
	isAllChecked: PropTypes.bool,
	name: PropTypes.string,
	hasFooter: PropTypes.bool,
	height: PropTypes.string,
};

export { ColumnsFilterComponent };
