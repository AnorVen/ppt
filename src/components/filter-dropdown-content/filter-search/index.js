import React from 'react';
import PropTypes from 'prop-types';
import SearchField from '@/semantic-ui/components/search-field';
import './styles.scss';

const FilterSearch = ({ searchValue, onSearchValueChange }) => {
	return (
		<div className="filter-search">
			<SearchField dark isOpen value={searchValue} onChange={onSearchValueChange} />
		</div>
	);
};

FilterSearch.propTypes = {
	searchValue: PropTypes.string.isRequired,
	onSearchValueChange: PropTypes.func.isRequired,
};

export { FilterSearch };
