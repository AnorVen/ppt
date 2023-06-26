/* eslint-disable consistent-return */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CustomDropdown = ({
	isOpen,
	onOpenChange,
	icon,
	dropdownContent,
	alignLeft,
	alignCenter,
	alignTop,
	alignTopRight,
}) => {
	const dropDownRef = useRef();

	const handleOutsideClick = event => {
		if (isOpen && dropDownRef.current && !dropDownRef.current.contains(event.target)) {
			onOpenChange();
		}
	};

	useEffect(() => {
		if (handleOutsideClick) {
			document.body.addEventListener('mousedown', handleOutsideClick);
			return () => {
				document.body.removeEventListener('mousedown', handleOutsideClick);
			};
		}
	}, [isOpen]);

	return (
		<div ref={dropDownRef} className="custom-dropdown">
			<div className="custom-dropdown__icon-wrapper" onClick={onOpenChange}>
				{icon}
			</div>
			{isOpen && (
				<div
					className={`${alignLeft ? 'custom-dropdown__wrapper-align-left' : ''} ${
						alignCenter ? 'custom-dropdown__wrapper-align-center' : ''
					} ${alignTop ? 'custom-dropdown__wrapper-align-top' : ''} ${
						alignTopRight ? 'custom-dropdown__wrapper-align-top-right' : ''
					} custom-dropdown__wrapper`}
				>
					<div className="custom-dropdown__content">{dropdownContent}</div>
				</div>
			)}
		</div>
	);
};

CustomDropdown.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onOpenChange: PropTypes.func.isRequired,
	icon: PropTypes.element,
	dropdownContent: PropTypes.element.isRequired,
	alignLeft: PropTypes.bool,
	alignCenter: PropTypes.bool,
	alignTop: PropTypes.bool,
	alignTopRight: PropTypes.bool,
};

export { CustomDropdown };
