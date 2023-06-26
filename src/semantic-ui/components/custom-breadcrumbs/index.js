/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Breadcrumb, Popup } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './styles.scss';

/**
 * items: string[], array with names of links
 * items also items can be by array of objects:
 * {
 * 	title: string - name of link,
 * 	additional: string - additional text which becomes after the path
 * 	offset: number - offset relative to current position
 * }
 *
 * history: object, result of useHistory()
 * pathname: string, result of useLocation()
 * offset: number, path offset
 * isWithoutSubsystem: if true - first element is clickable, otherwise not
 * isWithSearchParams: if true - search params will be transferred with path
 * */

const CustomBreadcrumbs = ({ items, history, pathname, offset = 1, isWithoutSubsystem, isWithSearchParams }) => {
	const handleBreadcrumbClick = (index, crumbOptions) => {
		const pathNames = pathname.split('/').filter(Boolean);

		const crumbOffset = crumbOptions.offset || 0;

		const path = pathNames.slice(0, index + offset + crumbOffset).join('/');

		const searchParams = isWithSearchParams ? history.location.search : '';

		const pathAdditional = crumbOptions.additional || '';

		return history.push(`/${path}${pathAdditional}${searchParams}`);
	};

	// If breadcrumbs has subsystem, they start from the second element
	const startIndex = isWithoutSubsystem ? 0 : 1;

	return (
		<Breadcrumb className="custom-breadcrumbs">
			{!isWithoutSubsystem && (
				// If breadcrumbs has subsystem, the first item appears as a title
				<>
					<Popup
						trigger={
							<Breadcrumb.Section className="custom-breadcrumbs__title">{items[0]}</Breadcrumb.Section>
						}
						content={items[0]}
						basic
					/>
					<Breadcrumb.Divider icon="right chevron" className="custom-breadcrumbs__icon" />
				</>
			)}
			<div className="custom-breadcrumbs__container">
				{items.slice(startIndex).map((item, index, array) => {
					const isActive = index === array.length - 1;

					const title = item.title ?? item;

					return (
						<React.Fragment key={title}>
							{index !== 0 && (
								<Breadcrumb.Divider icon="right chevron" className="custom-breadcrumbs__icon" />
							)}
							{isActive ? (
								<Popup
									trigger={
										<Breadcrumb.Section active={isActive} className="custom-breadcrumbs__link">
											{title}
										</Breadcrumb.Section>
									}
									content={title}
									basic
								/>
							) : (
								<Popup
									trigger={
										<Breadcrumb.Section
											onClick={() => {
												if (item.onClick) {
													item.onClick();
												} else {
													handleBreadcrumbClick(index + startIndex, item);
												}
											}}
											className="custom-breadcrumbs__link"
										>
											{title}
										</Breadcrumb.Section>
									}
									content={title}
									basic
								/>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</Breadcrumb>
	);
};

CustomBreadcrumbs.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				additional: PropTypes.string,
				offset: PropTypes.number,
				onClick: PropTypes.func,
			}),
		]).isRequired,
	).isRequired,
	history: PropTypes.object.isRequired,
	pathname: PropTypes.string.isRequired,
	offset: PropTypes.number,
	isWithoutSubsystem: PropTypes.bool,
	isWithSearchParams: PropTypes.bool,
};

export { CustomBreadcrumbs };
