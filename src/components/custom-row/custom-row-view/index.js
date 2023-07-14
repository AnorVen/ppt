import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './styles.scss';

const CustomRowView = ({ status }) => {
	return (
		<div className="custom-row" data-testid="custom-row">
			<Icon className={`${status ? 'check' : 'minus'} icon`} data-testid="custom-row-icon" />
		</div>
	);
};

CustomRowView.propTypes = {
	status: PropTypes.bool.isRequired,
};

export { CustomRowView };
