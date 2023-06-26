import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';
import { ModalActionButtons } from './modal-action-buttons';
import './styles.scss';

function ModalWindow({
	isModalShown,
	onClose,
	headerText,
	actionButtons,
	modalContent,
	size = 'mini',
	tourSelector,
	isScrolling,
	footerButtons,
}) {
	return (
		<Modal size={size} open={isModalShown} onClose={onClose} className="modal-window" tour-data={tourSelector}>
			{(headerText || actionButtons) && (
				<Modal.Header className="modal-window__header">
					<p className="modal-window__header-text">{headerText}</p>
					{actionButtons && (
						<Modal.Actions>
							<ModalActionButtons buttons={actionButtons} />
						</Modal.Actions>
					)}
				</Modal.Header>
			)}
			{modalContent && <Modal.Content scrolling={isScrolling}>{modalContent}</Modal.Content>}

			{footerButtons && footerButtons}
		</Modal>
	);
}

ModalWindow.propTypes = {
	isModalShown: PropTypes.bool.isRequired,
	onClose: PropTypes.func,
	headerText: PropTypes.string,
	actionButtons: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string,
			onClick: PropTypes.func.isRequired,
			text: PropTypes.string.isRequired,
		}),
	),
	modalContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	size: PropTypes.string,
	tourSelector: PropTypes.string,
	isScrolling: PropTypes.bool,
	footerButtons: PropTypes.object,
};

export { ModalWindow };
