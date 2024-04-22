'use client';

import { setIsShowPopup, setIsShowPopupText } from '@/components/store/store';
import { ModalWindow } from '@/semantic-ui/components/modal-window';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { Button } from 'semantic-ui-react';

const PopupForAll = () => {
	const isShowPopup = useSelector(state => state.main.isShowPopup);
	const isShowPopupText = useSelector(state => state.main.isShowPopupText);
	const dispatch = useDispatch();

	const handleClosePopup = () => {
		dispatch(setIsShowPopup(false));
		dispatch(setIsShowPopupText(''));
	};
	return <div className="popup-for-all">

		{isShowPopup && <ModalWindow
			headerText="Результат"
			isModalShown={isShowPopup}
			onClose={handleClosePopup}
			modalContent={
				<p className="modals__content">
					{isShowPopupText}
				</p>}
			footerButtons={
				<div className="modal-footer-buttons">
						<Button
							key={'Закрыть окно'}
							className={`white modal-footer-buttons__button`}
							onClick={handleClosePopup}
							type="button"
							disabled={false}
							loading={false}
							data-testid="modal-footer-button"
						>
							Закрыть окно
						</Button>
				</div>}
		/>}

	</div>;
};

export default PopupForAll;