import { url } from '@/constants';

export const getTrainersRequest = () =>
	fetch(`${url}/api/user/list`, {
		next: { tags: ['user'] },
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);


export const getTrainerRequest = (payload) => fetch(`${url}/api/user/get`, {
	next: { tags: ['user'] },
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(payload),
})
.then(async response => await response.json())
.catch(error => error);

export const updateTrainerRequest = (payload) => fetch(`${url}/api/user/update`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(payload),
})
.then(async response => await response.json())
.catch(error => error);


export const createTrainerRequest = (payload) => fetch(`${url}/api/user/add`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(payload),
})
.then(async response => await response.json())
.catch(error => error);

export const deleteTrainerRequest = (payload) => fetch(`${url}/api/user/delete`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(payload),
})
.then(async response => await response.json())
.catch(error => error);