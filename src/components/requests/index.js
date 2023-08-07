export const url = `http://localhost:5000`;

export const getCoursesRequest = () =>
	fetch(`${url}/api/course/list`, {
		method: 'POST',
		body: JSON.stringify({}),
	})
	.then(async response => await response.json())
	.catch(error => error);