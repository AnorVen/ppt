import { cookie, url } from '@/constants';

export const loginRequest = (payload) =>
	fetch(`${url}/api/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const logoutRequest = () =>
	fetch(`${url}/api/logout`, {
		method: 'POST', headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const checkAuthRequest = () =>
	fetch(`${url}/api/refresh`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('token')}`
		},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const registrationRequest = (payload) =>
	fetch(`${url}/api/registration`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('token')}`,
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);