import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const MapLoaderComponent = ({ mapLoaderData, top, left }) => {
	return (
		<div className="map-loader" style={{ top, left }}>
			{mapLoaderData.map(title => (
				<div className="map-loader__item" key={title}>
					<span className="map-loader__item-text">Загружаем {title}...</span>
				</div>
			))}
		</div>
	);
};

MapLoaderComponent.propTypes = {
	mapLoaderData: PropTypes.arrayOf(PropTypes.string).isRequired,
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
};

export { MapLoaderComponent };
