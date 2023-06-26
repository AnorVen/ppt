import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Dropdown } from 'semantic-ui-react';

const HeaderSelect = ({
	onSelectChange,
	selectTitle,
	selectOptions,
	isDark,
	value,
	isSearch,
	disabled,
	loading,
	placeholder,
}) => {
	return (
		<div className="header-select">
			{selectTitle && (
				<span className={`header-select__title ${isDark ? 'header-select__title_dark' : ''}`}>
					{selectTitle}
				</span>
			)}
			<Dropdown
				selection
				fluid
				onChange={onSelectChange}
				options={selectOptions}
				value={value}
				search={isSearch}
				className={`header-select__dropdown  ${isDark ? 'header-select__dropdown_dark' : ''}`}
				noResultsMessage="Не найдено"
				disabled={disabled}
				loading={loading}
				placeholder={placeholder}
				icon="chevron down"
			/>
		</div>
	);
};

HeaderSelect.propTypes = {
	onSelectChange: PropTypes.func.isRequired,
	selectTitle: PropTypes.string,
	placeholder: PropTypes.string,
	selectOptions: PropTypes.array.isRequired,
	isDark: PropTypes.bool,
	value: PropTypes.string,
	isSearch: PropTypes.bool,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
};

export { HeaderSelect };
