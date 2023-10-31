import {url} from '@/constants';

export const getSeminarsRequest = () =>
	fetch(`${url}/api/seminar/list`, {
		method: 'POST', headers: {
		'Content-Type': 'application/json',
	},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const getSeminarRequest = (payload, meta) =>
	fetch(`${url}/api/seminar/get`, {
		method: 'POST', headers: {
		'Content-Type': 'application/json',
	},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const addSeminarRequest = (payload, meta) =>
	fetch(`${url}/api/seminar/add`, {
		method: 'POST', headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const updateSeminarRequest = (payload, meta) =>
	fetch(`${url}/api/seminar/update`, {
		method: 'POST', headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);
