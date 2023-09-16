import {url} from '@/constants';

export const getSeminarsRequest = () =>
	fetch(`${url}/api/seminar/list`, {
		method: 'POST',
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const getSeminarRequest = (payload, meta) =>
	fetch(`${url}/api/seminar/get`, {
		method: 'POST',
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);
