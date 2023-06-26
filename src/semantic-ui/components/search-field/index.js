import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon';
import './styles.scss';

const SearchField = ({ onChange, isOpen, onOpen, value, dark, placeholder, isClearable, onClear }) => {
	return (
		<div className={`search-field ${dark ? 'dark' : ''}`}>
			<input
				className={`${isOpen ? 'search-field__input search-field__input-visible' : 'search-field__input'}`}
				type="text"
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			{isClearable && value ? (
				<Icon className="search-field__icon" name="close" onClick={onClear} />
			) : (
				<Icon className="search-field__icon" name="search" onClick={onOpen} />
			)}
		</div>
	);
};

SearchField.propTypes = {
	onChange: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onOpen: PropTypes.func,
	value: PropTypes.string,
	dark: PropTypes.bool,
	placeholder: PropTypes.string,
	isClearable: PropTypes.bool,
	onClear: PropTypes.func,
};

export default SearchField;
