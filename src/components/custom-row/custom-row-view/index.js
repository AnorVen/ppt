'use client';
import { setDescriptionInPopup, setIsDescriptionPopupShow } from '@/components/store/store';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useDispatch } from 'react-redux';

const CustomRowView = ({ description }) => {
	const dispatch = useDispatch();
	const showPopup = () => {
		dispatch(setIsDescriptionPopupShow(true));
		dispatch(setDescriptionInPopup(description));
	};
	return (
		<div className="custom-row" data-testid="custom-row">
			{description
				? `${description.substr(0, 50)}... `
				: 'описания нет'}
			{description && <span
				className="show-more"
				onClick={showPopup}>полное описание</span>}
		</div>
	);
};

CustomRowView.propTypes = {
	status: PropTypes.bool.isRequired,
};

export { CustomRowView };
