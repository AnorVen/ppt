import {url} from '@/constants';

export const getCitiesRequest = () =>
	fetch(`${url}/api/city/list`, {
		method: 'POST', headers: {
		'Content-Type': 'application/json',
	},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const getCityRequest = (payload, meta) =>
	fetch(`${url}/api/city/get`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const createCityRequest = (payload, meta) =>{
	console.log(payload);
	return fetch(`${url}/api/city/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);
}

