import {url} from '@/constants';

export const getCoursesRequest = () =>
	fetch(`${url}/api/course/list`, {
		method: 'POST', headers: {
		'Content-Type': 'application/json',
	},
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const getCourseRequest = (payload, meta) =>
	fetch(`${url}/api/course/get`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);


export const createCourseRequest = (payload, meta) =>
	fetch(`${url}/api/course/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const updateCourseRequest = (payload, meta) =>
	fetch(`${url}/api/course/update`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);

export const deleteCourseRequest = (payload, meta) =>
	fetch(`${url}/api/course/delete`, {
		method: 'POST', headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	.then(async response => await response.json())
	.catch(error => error);