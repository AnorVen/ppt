'use  client'
import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@/semantic-ui/components/date-picker';
import './styles.scss';

const FilterDateRange = ({ value, onDateRangeChange }) => {
	return (
		<div className="filter-date-range">
			С <DatePicker onChange={e => onDateRangeChange(e, 'from')} type="date" value={value.from} />
			По <DatePicker onChange={e => onDateRangeChange(e, 'to')} type="date" value={value.to} />
		</div>
	);
};

FilterDateRange.propTypes = {
	value: PropTypes.shape({
		from: PropTypes.string.isRequired,
		to: PropTypes.string.isRequired,
	}).isRequired,
	onDateRangeChange: PropTypes.func.isRequired,
};

export { FilterDateRange };
