import {url} from '@/constants';

export const getCoursesRequest = () =>
	fetch(`${url}/api/seminar/list`, {
		method: 'POST',
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);
