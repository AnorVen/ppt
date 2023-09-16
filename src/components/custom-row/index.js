import { CustomRowOrganaizer } from '@/components/custom-row/custom-row-organizer';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { newsType } from '../prop-types';
import { CustomRowView } from './custom-row-view';

export const CustomRowWrapper = ({ rowData, columnId }) => {
	if (columnId === 'description'){
		return <CustomRowView description={rowData[columnId]} />;
	}
	if (columnId === 'organizer'){
		return <CustomRowOrganaizer name={rowData[columnId]} contacts={rowData['contacts']} />;
	}

};

const CustomRow = connect()(CustomRowWrapper);

CustomRowWrapper.propTypes = {
	rowData: newsType,
	columnId: PropTypes.string.isRequired,
};

export { CustomRow };
