import React from 'react';
import PropTypes from 'prop-types';
import FormCheckbox from '../form-checkbox';

const FormCheckboxField = ({
	input,
	type,
	toggle,
	label,
	disabled,
	slider,
	defaultChecked,
	value,
	onChange,
	meta: { error } = {},
}) => {
	const handleChange = (_, data) => {
		input.onChange(data.checked);

		if (onChange) {
			onChange(data.checked);
		}
	};

	return (
		<>
			<FormCheckbox
				// eslint-disable-next-line react/jsx-props-no-spreading
				checked={input.checked}
				onChange={handleChange}
				value={value}
				type={type}
				toggle={toggle}
				label={label}
				disabled={disabled}
				slider={slider}
				defaultChecked={defaultChecked}
				id={value}
			/>
			{error && <span className="validation_error">{error}</span>}
		</>
	);
};

FormCheckboxField.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string,
	toggle: PropTypes.bool,
	defaultChecked: PropTypes.bool,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	slider: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export { FormCheckboxField };
