import { url } from '@/constants';

export const getTrainersRequest = () =>
	fetch(`${url}/api/user/list`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);


export const getTrainerRequest = (payload) => fetch(`${url}/api/user/get`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
	body: JSON.stringify(payload),
})
.then(async response => await response.json())
.catch(error => error);

