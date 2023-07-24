'use client';
import { sagaActions } from '@/components/sagaActions';
import { setIsDescriptionPopupShow, setDescriptionInPopup } from '@/components/store/store';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';

const DescriptionPopup = () => {
	const description = useSelector((state) => state.main.descriptionInPopup)
	const dispatch = useDispatch();
	return (
		<div className="popup">
			<div
				className="close-popup"
				onClick={()=> {
					dispatch(setIsDescriptionPopupShow(false))
					dispatch(setDescriptionInPopup(null))
				}}
			/>
			{description}
		</div>
	);
};

export { DescriptionPopup };
