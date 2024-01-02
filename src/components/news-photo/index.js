import React from 'react';
import { Icon, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

export const NewsPhoto = ({ onSetPhotoChange, input, onDeleteFile }) => {
	console.log(input);
	return (
		<div className="news" data-testid="news-image-block">
			{input.value ? (
				<img className="news__image" src={input.value} alt="news" data-testid="news-image" />
			) : (
				<Icon size="massive" name="image outline" data-testid="news-no-image" />
			)}
			<Input onChange={onSetPhotoChange} type="file" id="input__file"
			       accept="image/*, image/jpeg"
				data-testid="news-image-input" />
			{input.value && (
				<span className="news__image--remove" onClick={onDeleteFile} data-testid="news__image--remove" />
			)}
			<div className="news__icon-wrapper">
				<Icon className="news__icon" name="pencil alternate" />
			</div>
		</div>
	);
};

NewsPhoto.propTypes = {
	onSetPhotoChange: PropTypes.func.isRequired,
	onDeleteFile: PropTypes.func.isRequired,
	input: PropTypes.object,
};
