import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DatePicker = ({ value, onChange, isDark, type, disabled, min, max }) => {
	return (
		<input
			className={`date-picker ${isDark ? 'date-picker_dark' : ''}`}
			type={type}
			onChange={onChange}
			value={value}
			disabled={disabled}
			min={min}
			max={max}
		/>
	);
};

DatePicker.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	isDark: PropTypes.bool,
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	min: PropTypes.string,
	max: PropTypes.string,
};

export { DatePicker };
