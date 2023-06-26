import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Icon = ({ className, name, onClick, size, disabled, active, onDisabledClick, color }) => {
	const style = {};
	if (color) {
		style.color = color;
	}
	if (size) {
		style.fontSize = size;
	}

	return (
		<div
			onClick={disabled ? onDisabledClick : onClick}
			className={`icon_rnis  ${name || ''} ${disabled ? 'disabled' : ''} ${active ? 'active' : ''} ${
				className || ''
			}`}
			style={style}
		/>
	);
};

Icon.propTypes = {
	onClick: PropTypes.func.isRequired,
	onDisabledClick: PropTypes.func,
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
	disabled: PropTypes.bool,
	active: PropTypes.bool,
};

export { Icon };
