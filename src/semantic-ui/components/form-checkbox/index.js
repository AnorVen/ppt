import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormCheckbox = ({ type, toggle, label, disabled, slider, defaultChecked, value, checked, onChange }) => {
	return (
		<div className="form-checkbox">
			{/* eslint-disable react/jsx-props-no-spreading */}
			<Checkbox
				checked={checked}
				value={value}
				type={type}
				toggle={toggle}
				label={label}
				disabled={disabled}
				slider={slider}
				defaultChecked={defaultChecked}
				id={value}
				onChange={onChange}
			/>
		</div>
	);
};

FormCheckbox.propTypes = {
	toggle: PropTypes.bool,
	slider: PropTypes.bool,
	value: PropTypes.string,
	type: PropTypes.string,
	label: PropTypes.string,
	defaultChecked: PropTypes.bool,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};

export default FormCheckbox;
