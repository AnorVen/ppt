import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import SemanticDatepicker from 'react-semantic-ui-datepickers';

const FormDataPickerFieldWithLimit = ({
	input,
	meta: { error, touched },
	label,
	dark,
	filterDate,
	disabled,
	loading,
	autoComplete,
}) => {
	return (
		<div className={`input_row_datepicker ${dark ? 'dark' : ''} ${error && touched ? 'error' : ''}`}>
			{label && <label htmlFor={label}>{label}</label>}
			<SemanticDatepicker
				// eslint-disable-next-line react/jsx-props-no-spreading
				value={input.value ? new Date(input.value) : null}
				locale="ru-RU"
				filterDate={filterDate}
				placeholder="дд.мм.гггг"
				format="DD.MM.YYYY"
				id={label}
				onChange={(_, { value }) => input.onChange(value)}
				disabled={disabled}
				loading={loading}
				autoComplete={autoComplete}
				type="range"
			/>
			{error && touched && <span className="validation_error">{error}</span>}
		</div>
	);
};

FormDataPickerFieldWithLimit.propTypes = {
	input: PropTypes.object.isRequired,
	meta: PropTypes.object.isRequired,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	dark: PropTypes.bool,
	filterDate: PropTypes.func,
	autoComplete: PropTypes.string,
};

export { FormDataPickerFieldWithLimit };
