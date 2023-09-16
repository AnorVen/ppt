import {url} from '@/constants';

export const getCentersRequest = () =>
	fetch(`${url}/api/center/list`, {
		method: 'POST',
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);
