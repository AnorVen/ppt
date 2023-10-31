import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Icon } from '@/semantic-ui/components/icon';

export const TextButton = ({ children, disabled, onClick, leftIcon }) => {
	return (
		<button className="text-button" type="button" disabled={disabled} onClick={onClick}>
			{leftIcon && (
				<div className="text-button__icon text-button__icon_left">
					<Icon name={leftIcon} />
				</div>
			)}
			{children}
		</button>
	);
};

TextButton.propTypes = {
	children: PropTypes.node.isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	leftIcon: PropTypes.string,
};
