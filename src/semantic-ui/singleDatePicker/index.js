/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const SingleDatePicker = ({ input, label, isLabelLeft }) => {
	const dateChangeHandler = (_, data) => {
		input.onChange(data.value);
	};

	return (
		<div className="single-data-picker">
			<p className={isLabelLeft ? 'SingleDatePicker__label-left' : ''}>{label}</p>
			<Input type="date" {...input} onChange={dateChangeHandler} />
		</div>
	);
};

SingleDatePicker.propTypes = {
	input: PropTypes.object.isRequired,
	label: PropTypes.string,
	isLabelLeft: PropTypes.bool,
};

export default SingleDatePicker;
