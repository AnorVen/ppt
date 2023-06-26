import React from 'react';
import PropTypes from 'prop-types';
import { Input, Popup } from 'semantic-ui-react';
import './styles.scss';

const FormInputField = ({
	input,
	type,
	placeholder,
	meta: { error, touched } = {},
	label,
	autoFocus,
	autoComplete,
	disabled,
	icon,
	dark,
	loading,
	min,
	max,
	timeWithSeconds,
	popupPosition,
	popupText,
}) => {
	return (
		<div className={`input_row ${dark ? 'dark' : ''} ${error && touched ? 'error' : ''}`}>
			{label && <label htmlFor={label}>{label}</label>}
			{popupText ? (
				<Popup
					position={popupPosition || 'top center'}
					content={<div className="input_row__popup-text">{popupText}</div>}
					trigger={
						/* eslint-disable react/jsx-wrap-multilines */
						<Input
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...input}
							value={input.value}
							autoFocus={autoFocus}
							fluid
							type={type}
							placeholder={placeholder}
							id={label}
							autoComplete={autoComplete}
							disabled={disabled}
							icon={icon}
							loading={loading}
							min={min}
							max={max}
							step={type === 'time' && timeWithSeconds ? '1' : '0'}
						/>
					}
				/>
			) : (
				<Input
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...input}
					value={input.value}
					autoFocus={autoFocus}
					fluid
					type={type}
					placeholder={placeholder}
					id={label}
					autoComplete={autoComplete}
					disabled={disabled}
					icon={icon}
					loading={loading}
					min={min}
					max={max}
					step={type === 'time' && timeWithSeconds ? '1' : '0'}
				/>
			)}
			{error && touched && <span className="validation_error">{error}</span>}
		</div>
	);
};

FormInputField.propTypes = {
	input: PropTypes.object.isRequired,
	placeholder: PropTypes.string.isRequired,
	meta: PropTypes.object,
	type: PropTypes.string.isRequired,
	label: PropTypes.string,
	autoFocus: PropTypes.bool,
	autoComplete: PropTypes.oneOf(['off']),
	disabled: PropTypes.bool,
	icon: PropTypes.object,
	dark: PropTypes.bool,
	loading: PropTypes.bool,
	min: PropTypes.string,
	max: PropTypes.string,
	timeWithSeconds: PropTypes.bool,
	popupPosition: PropTypes.string,
	popupText: PropTypes.string,
};

export { FormInputField };
