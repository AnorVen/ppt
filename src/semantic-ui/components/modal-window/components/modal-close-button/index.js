import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// eslint-disable-next-line react/display-name
const ModalCloseButton = memo(({ onClick }) => (
	<button className="modal-close-button" onClick={onClick} type="button">
		<span className="modal-close-button__line" />
		<span className="modal-close-button__line" />
	</button>
));

ModalCloseButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export { ModalCloseButton };
