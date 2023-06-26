/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SidebarComponent = ({ sideBarData, active, withPopup, withBase64Icons }) => (
	<div className="sidebar">
		{sideBarData.map(({ title, onClick, url, icon }) => {
			if (url) {
				return withPopup ? (
					<Popup
						key={title}
						content={title}
						position="right center"
						trigger={
							<Link to={url} key={title}>
								<div className={`sidebar-item ${active === url ? 'sidebar-item__active' : ''}`}>
									{withBase64Icons ? (
										<i
											className={`sidebar-item__base64-icon ${icon} ${
												active === url ? 'active' : ''
											}`}
										/>
									) : (
										<div className="sidebar-item__icon-wrapper">
											<Icon
												name={icon}
												size="big"
												color={active === url ? null : 'red'}
												inverted={active === url}
											/>
										</div>
									)}
									<div className="sidebar-item__title-wrapper">{title}</div>
								</div>
							</Link>
						}
					/>
				) : (
					<Link to={url} key={title}>
						<div className={`sidebar-item ${active === url ? 'sidebar-item__active' : ''}`}>
							{withBase64Icons ? (
								<i className={`sidebar-item__base64-icon ${icon} ${active === url ? 'active' : ''}`} />
							) : (
								<div className="sidebar-item__icon-wrapper">
									<Icon
										name={icon}
										size="big"
										color={active === url ? null : 'red'}
										inverted={active === url}
									/>
								</div>
							)}
							<div className="sidebar-item__title-wrapper">{title}</div>
						</div>
					</Link>
				);
			}

			return withPopup ? (
				<Popup
					key={title}
					content={title}
					position="right center"
					trigger={
						<div
							className={`sidebar-item ${active === url ? 'sidebar-item__active' : ''}`}
							onClick={onClick}
							key={title}
						>
							{withBase64Icons ? (
								<i className={`sidebar-item__base64-icon ${icon} ${active === url ? 'active' : ''}`} />
							) : (
								<div className="sidebar-item__icon-wrapper">
									<Icon
										name={icon}
										size="big"
										color={active === url ? null : 'red'}
										inverted={active === url}
									/>
								</div>
							)}
							<div className="sidebar-item__title-wrapper">{title}</div>
						</div>
					}
				/>
			) : (
				<div
					className={`sidebar-item ${active === url ? 'sidebar-item__active' : ''}`}
					onClick={onClick}
					key={title}
				>
					{withBase64Icons ? (
						<i className={`sidebar-item__base64-icon ${icon} ${active === url ? 'active' : ''}`} />
					) : (
						<div className="sidebar-item__icon-wrapper">
							<Icon
								name={icon}
								size="big"
								color={active === url ? null : 'red'}
								inverted={active === url}
							/>
						</div>
					)}
					<div className="sidebar-item__title-wrapper">{title}</div>
				</div>
			);
		})}
	</div>
);

SidebarComponent.propTypes = {
	sideBarData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			url: PropTypes.string,
			icon: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		}).isRequired,
	).isRequired,
	active: PropTypes.string.isRequired,
	withPopup: PropTypes.bool,
	withBase64Icons: PropTypes.bool,
};

export { SidebarComponent };
