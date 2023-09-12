import {url} from '@/constants';

export const getCoursesRequest = () =>
	fetch(`${url}/api/course/list`, {
		method: 'POST',
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const getCourseRequest = (payload, meta) =>
	fetch(`${url}/api/course/get`, {
		method: 'POST',
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);
