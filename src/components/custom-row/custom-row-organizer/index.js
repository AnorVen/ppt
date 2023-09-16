'use client';
import { setDescriptionInPopup, setIsDescriptionPopupShow } from '@/components/store/store';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useDispatch } from 'react-redux';

const CustomRowOrganaizer = ({ name, contacts }) => {
	const dispatch = useDispatch();
	const showPopup = () => {
		dispatch(setIsDescriptionPopupShow(true));
		dispatch(setDescriptionInPopup(description));
	};
	return (
		<div className="custom-row" data-testid="custom-row">
			<p>{name}</p>
			{contacts?.phone && (<p><a href={`tel:${contacts.phone}`}>{contacts.phone}</a></p>)}
			{contacts?.email && (<a href={`mailto:${contacts.email}`}>{contacts.email}</a>)}

			{contacts?.text && (<p>{contacts.text}</p>)}
		</div>
	);
};

CustomRowOrganaizer.propTypes = {
	status: PropTypes.bool.isRequired,
};

export { CustomRowOrganaizer };
