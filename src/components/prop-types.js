import PropTypes from 'prop-types';

export const PaginationType = PropTypes.shape({
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	perPage: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	from: PropTypes.number.isRequired,
	to: PropTypes.number.isRequired,
	isNextItem: PropTypes.bool.isRequired,
	isPrevItem: PropTypes.bool.isRequired,
	isLastItem: PropTypes.bool.isRequired,
	isFirstItem: PropTypes.bool.isRequired,
});

export const FilterSearchType = PropTypes.shape({
	// TODO: Your columns with search
});

export const OptionType = PropTypes.shape({
	value: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	key: PropTypes.string.isRequired,
}).isRequired;

export const OptionsType = PropTypes.arrayOf(OptionType).isRequired;

export const TableDataType = PropTypes.shape({
	id: PropTypes.string.isRequired,
	// TODO: Improve type
});

export const newsType = PropTypes.shape({
	timestamp: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	is_active: PropTypes.string.isRequired,
	is_pinned: PropTypes.string.isRequired,
	uuid: PropTypes.string.isRequired,
});
