import { url } from '@/constants';

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
		method: 'GET',
		credentials: 'include',
		withCredentials: true
	})
	.then(async response => await response.json())
	.catch(error => error);

export const registrationRequest = (payload) =>
	fetch(`${url}/api/registration`, {
		next: { tags: ['user'] },
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `${localStorage.getItem('token')}`,
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const uploadRequest = (body) =>
	fetch(`${url}/api/upload`, {
		method: 'POST',
		headers: {
			Authorization: `${localStorage.getItem('token')}`,
		},
		body,
	})
	.then(async response => await response.json())
	.catch(error => error);