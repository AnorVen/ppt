'use client'
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './styles.scss';
import { Button, Icon } from 'semantic-ui-react';
import { notificationDismiss } from '../../../modules/notifications/actions';

const NotificationItem = ({ notificationInfo, notificationDismissFunc }) => {
	useEffect(() => {
		setTimeout(() => notificationDismissFunc({ id: notificationInfo.id }), notificationInfo.dismissAfter);
	}, []);

	return (
		<div className={`notification notification-${notificationInfo.type}`}>
			<div className="notification__content">
				<p className="notification__message">{notificationInfo.message}</p>
				{notificationInfo.initTime && <p className="notification__time">{notificationInfo.initTime}</p>}
				{notificationInfo.reloadFunc && (
					<div className="notification__button-wrapper">
						<Button primary onClick={notificationInfo.reloadFunc}>
							Обновить
						</Button>
						<Button onClick={() => notificationDismissFunc({ id: notificationInfo.id })}>Позже</Button>
					</div>
				)}
			</div>
			{!notificationInfo.reloadFunc && (
				<div className="notification__button">
					<Icon name="close" onClick={() => notificationDismissFunc({ id: notificationInfo.id })} />
				</div>
			)}
		</div>
	);
};

NotificationItem.propTypes = {
	notificationInfo: PropTypes.object,
	notificationDismissFunc: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = { notificationDismissFunc: notificationDismiss };

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const Notification = compose(withConnect)(NotificationItem);

export { Notification };
