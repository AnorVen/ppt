/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function FormDropdownField({
	placeholder,
	input,
	options,
	meta: { dirty, error },
	label,
	search,
	multiple,
	onSearchChange,
	searchQuery,
	index,
	noResultsMessage,
	disabled,
}) {
	const onChangeHandler = (_, data) => {
		input.onChange(data.value);
		if (onSearchChange) {
			onSearchChange(data, index, data.value);
		}
	};

	const handleSearchChange = (_, data) => {
		if (onSearchChange) {
			onSearchChange(data, index);
		}
	};

	return (
		<div className="form-dropdown-field input_row">
			{label && <label htmlFor={label}>{label}</label>}
			<Dropdown
				{...input}
				value={input.value}
				fluid
				placeholder={placeholder}
				search={search}
				selection
				options={options}
				onChange={onChangeHandler}
				id={label}
				multiple={multiple}
				onSearchChange={handleSearchChange}
				searchQuery={searchQuery}
				className="form-dropdown-field__dropdown"
				noResultsMessage={noResultsMessage}
				disabled={disabled}
			/>
			{dirty && error && <span className="validation_error">{error}</span>}
		</div>
	);
}

FormDropdownField.propTypes = {
	placeholder: PropTypes.string,
	input: PropTypes.object,
	disabled: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
			key: PropTypes.string.isRequired,
		}),
	),
	meta: PropTypes.object.isRequired,
	label: PropTypes.string,
	search: PropTypes.bool,
	multiple: PropTypes.bool,
	onSearchChange: PropTypes.func,
	searchQuery: PropTypes.string,
	index: PropTypes.number,
	noResultsMessage: PropTypes.string,
};

export { FormDropdownField };
