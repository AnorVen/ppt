import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

const Avatar = ({ onAvatarChange, input }) => {
	return (
		<div className="avatar">
			{input.value ? (
				<img className="avatar__image" src={input.value} alt="avatar" />
			) : (
				<Icon size="massive" name="image outline" />
			)}
			<Input onChange={onAvatarChange} type="file" id="input__file" />
			<div className="avatar__icon-wrapper">
				<Icon className="avatar__icon" name="pencil alternate" />
			</div>
		</div>
	);
};

Avatar.propTypes = {
	onAvatarChange: PropTypes.func,
	input: PropTypes.object,
};

export { Avatar };
