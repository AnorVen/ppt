import React from 'react';
import { TextArea } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormTextAreaField = ({
	input,
	placeholder,
	meta: { touched, error },
	label,
	autoFocus,
	autoComplete,
	dark,
	height,
}) => (
	<div className={`input_row ${dark ? 'dark' : ''} ${error && touched ? 'error' : ''}`}>
		{label && <label htmlFor={label}>{label}</label>}
		<TextArea
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...input}
			value={input.value}
			autoFocus={autoFocus}
			placeholder={placeholder}
			id={label}
			autoComplete={autoComplete}
			style={{ height }}
		/>
		{touched && error && <span className="validation_error">{error}</span>}
	</div>
);

FormTextAreaField.propTypes = {
	input: PropTypes.object.isRequired,
	placeholder: PropTypes.string.isRequired,
	meta: PropTypes.object.isRequired,
	label: PropTypes.string,
	autoFocus: PropTypes.bool,
	autoComplete: PropTypes.oneOf(['off']),
	dark: PropTypes.bool,
	height: PropTypes.string,
};

export { FormTextAreaField };
