import React from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const CLASS_NAME = 'modal-action-buttons';

const ModalActionButtons = ({ buttons }) => (
	<div className={CLASS_NAME}>
		{buttons.map(({ color, onClick, text, disabled, loading, type, isSeparator, size, popupText }) => (
			<div
				className={`${
					type === 'icon' ? 'modal-action-buttons__icon-wrapper' : 'modal-action-buttons__button-wrapper'
				}`}
				key={text}
			>
				{type === 'icon' ? (
					<Popup
						content={popupText}
						disabled={!popupText}
						offset={[0, 5]}
						position="bottom center"
						className="modal-action-buttons__popup"
						trigger={<Icon onClick={onClick} size={size} name={text} />}
					/>
				) : (
					<Button
						className={color || 'primary'}
						onClick={onClick}
						type="button"
						disabled={disabled}
						loading={loading}
					>
						{text}
					</Button>
				)}
				{isSeparator && <div className={`${CLASS_NAME}__separator`} />}
			</div>
		))}
	</div>
);

ModalActionButtons.propTypes = {
	buttons: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string,
			onClick: PropTypes.func.isRequired,
			text: PropTypes.string.isRequired,
			disabled: PropTypes.bool,
			type: PropTypes.string,
			isSeparator: PropTypes.bool,
			popupText: PropTypes.string,
		}),
	),
};

export { ModalActionButtons };
