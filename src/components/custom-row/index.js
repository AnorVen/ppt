import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newsType } from '../prop-types';
import { CustomRowView } from './custom-row-view';

export const CustomRowWrapper = ({ rowData, columnId }) => {
	return <CustomRowView description={rowData[columnId]} />;
};

const CustomRow = connect()(CustomRowWrapper);

CustomRowWrapper.propTypes = {
	rowData: newsType,
	columnId: PropTypes.string.isRequired,
};

export { CustomRow };
