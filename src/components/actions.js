
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


export const SET_CHECKBOX_FILTERS = 'news/SET_CHECKBOX_FILTERS';
export const setCheckboxFiltersAction = payload => ({
	type: SET_CHECKBOX_FILTERS,
	payload,
});

export const SET_FILTER_SEARCH = 'news/SET_FILTER_SEARCH';
export const setFilterSearchAction = payload => ({
	type: SET_FILTER_SEARCH,
	payload,
});

export const SET_SORTING = 'news/SET_SORTING';
export const setSortingAction = payload => ({
	type: SET_SORTING,
	payload,
});

export const SET_OPENED_FILTER_DROPDOWN_ID = 'news/SET_OPENED_FILTER_DROPDOWN_ID';
export const setOpenedFilterDropdownIdAction = payload => ({
	type: SET_OPENED_FILTER_DROPDOWN_ID,
	payload,
});

export const SET_META = 'news/SET_META';
export const setMetaAction = payload => ({
	type: SET_META,
	payload,
});

