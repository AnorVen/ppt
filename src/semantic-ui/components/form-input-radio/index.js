/* eslint-disable react/jsx-props-no-spreading,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FormRadioInput = ({ input, type, disabled, label }) => {
	return (
		<label className="form-radio-input">
			<input className="form-radio-input__elem" {...input} type={type} disabled={disabled} />
			<div
				className={
					disabled
						? 'form-radio-input__visible form-radio-input__visible_disabled'
						: 'form-radio-input__visible'
				}
			/>
			{label && (
				<div
					className={
						disabled
							? 'form-radio-input__title form-radio-input__title_disabled'
							: 'form-radio-input__title'
					}
				>
					{label}
				</div>
			)}
		</label>
	);
};

FormRadioInput.propTypes = {
	input: PropTypes.object,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	label: PropTypes.string,
};

export { FormRadioInput };
