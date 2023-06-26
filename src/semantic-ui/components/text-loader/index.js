import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextLoader = ({ size }) => <div className="text-loader" style={{ height: size }} />;

TextLoader.propTypes = {
	size: PropTypes.string.isRequired,
};

export { TextLoader };
