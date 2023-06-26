/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/tabindex-no-positive */
import { Dropdown } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormSelectField = ({
	input,
	options,
	search,
	multiple,
	disabled,
	onSearchChange,
	label,
	loading,
	placeholder,
	noResultsMessage,
	dark,
	meta: { error, touched } = {},
	isWithoutSelectOnBlur,
	isNotClearable,
	isTextClipped,
	onSelect,
	dropdownClassName,
	tabIndex,
	onDropdownOpen,
	isWithoutIcon,
}) => {
	const handleChange = (_, data) => {
		input.onChange(data.value);
		if (onSelect) onSelect(data.value);
	};

	const handleBlur = (_, data) => {
		if (input.onBlur) input.onBlur(data ? data.value : undefined);
	};

	const handleSearchChange = (_, data) => {
		if (onSearchChange) {
			onSearchChange(data);
		}
	};

	const { value, ...restInput } = input;

	return (
		<div
			className={`${dark && 'dark'} ${touched && error && 'error'} ${isTextClipped && 'text-clipped'} select_row`}
		>
			{label && <label htmlFor={label}>{label}</label>}
			<Dropdown
				{...restInput}
				onChange={handleChange}
				fluid
				multiple={multiple}
				selection
				clearable={!isNotClearable}
				search={search}
				noResultsMessage={noResultsMessage}
				options={options}
				disabled={disabled}
				onBlur={handleBlur}
				onSearchChange={handleSearchChange}
				loading={loading}
				placeholder={placeholder}
				icon={isWithoutIcon ? null : `${dark ? 'chevron down' : 'dropdown'}`}
				selectOnBlur={!isWithoutSelectOnBlur}
				className={dropdownClassName || ''}
				tabIndex={tabIndex || 0}
				value={multiple && value?.length === 0 ? [] : value}
				onOpen={onDropdownOpen}
			/>
			{touched && error && <span className="validation_error">{error}</span>}
		</div>
	);
};

FormSelectField.propTypes = {
	input: PropTypes.object,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	search: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
	loading: PropTypes.bool,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	noResultsMessage: PropTypes.string,
	onSearchChange: PropTypes.func,
	meta: PropTypes.object,
	dark: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		}),
	),
	isWithoutSelectOnBlur: PropTypes.bool,
	isNotClearable: PropTypes.bool,
	isTextClipped: PropTypes.bool,
	onSelect: PropTypes.func,
	dropdownClassName: PropTypes.string,
	tabIndex: PropTypes.number,
	onDropdownOpen: PropTypes.func,
	isWithoutIcon: PropTypes.bool,
};

export { FormSelectField };
