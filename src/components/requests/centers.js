import {url} from '@/constants';

export const getCentersRequest = () =>
	fetch(`${url}/api/center/list`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);
