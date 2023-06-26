
export const CREATE = 'CREATE';
export const createAction = () => ({
	type: CREATE,
});
export const DELETE = 'DELETE';
export const deleteAction = uuid => ({
	type: DELETE,
	uuid
});

export const UPDATE = 'UPDATE';
export const updateAction = () => ({
	type: UPDATE,
});

export const GET_COURSES = 'GET_COURSES';
export const getCoursesAction = () => ({
	type: GET_COURSES,
});

export const GET_COURSE = 'GET_COURSE';
export const getCourseAction = uuid => ({
	type: GET_COURSES,
	uuid
});
