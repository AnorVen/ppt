import {url} from '@/constants';

export const getCentersRequest = () =>
	fetch(`${url}/api/center/list`, {
		next: { tags: ['centers'] },
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const getCenterRequest = (payload, meta) =>
	fetch(`${url}/api/center/get`, {
		next: { tags: ['centers'] },
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);


export const createCenterRequest = (payload, meta) =>
	fetch(`${url}/api/center/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const updateCenterRequest = (payload, meta) =>
	fetch(`${url}/api/center/update`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const deleteCenterRequest = (payload, meta) =>
	fetch(`${url}/api/center/delete`, {
		method: 'POST', headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);