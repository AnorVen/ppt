export const CREATE_COURSE = 'CREATE_COURSE';
export const DELETE_COURSE = 'DELETE_COURSE';
export const UPDATE_COURSE = 'UPDATE_COURSE';
export const GET_COURSES = 'GET_COURSES';
export const GET_COURSE = 'GET_COURSE';

export const CREATE_TRAINER = 'CREATE_TRAINER';
export const DELETE_TRAINER = 'DELETE_TRAINER';
export const UPDATE_TRAINER = 'UPDATE_TRAINER';
export const GET_TRAINERS = 'GET_TRAINERS';
export const GET_TRAINER = 'GET_TRAINER';

export const CREATE_SEMINAR = 'CREATE_SEMINAR';
export const DELETE_SEMINAR = 'DELETE_SEMINAR';
export const UPDATE_SEMINAR = 'UPDATE_SEMINAR';
export const GET_SEMINARS = 'GET_SEMINARS';
export const GET_SEMINAR = 'GET_SEMINAR';

export const CREATE_CENTER = 'CREATE_CENTER';
export const DELETE_CENTER = 'DELETE_CENTER';
export const UPDATE_CENTER = 'UPDATE_CENTER';
export const GET_CENTERS = 'GET_CENTERS';
export const GET_CENTER = 'GET_CENTER';

export const CREATE_CITY = 'CREATE_CITY';
export const DELETE_CITY = 'DELETE_CITY';
export const UPDATE_CITY = 'UPDATE_CITY';
export const GET_CITIES = 'GET_CITIES';
export const GET_CITY = 'GET_CITY';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'
export const CHECK_AUTH = 'CHECK_AUTH'
export const REGISTRATION = 'REGISTRATION'

export const UPLOAD_FILE = 'UPLOAD_FILE'


export const SET_CHECKBOX_FILTERS = 'SET_CHECKBOX_FILTERS';
export const setCheckboxFiltersAction = payload => ({
	type: SET_CHECKBOX_FILTERS,
	payload,
});

export const SET_FILTER_SEARCH = 'SET_FILTER_SEARCH';
export const setFilterSearchAction = payload => ({
	type: SET_FILTER_SEARCH,
	payload,
});

export const SET_SORTING = 'SET_SORTING';
export const setSortingAction = payload => ({
	type: SET_SORTING,
	payload,
});

export const SET_OPENED_FILTER_DROPDOWN_ID = 'SET_OPENED_FILTER_DROPDOWN_ID';
export const setOpenedFilterDropdownIdAction = payload => ({
	type: SET_OPENED_FILTER_DROPDOWN_ID,
	payload,
});

export const SET_META = 'SET_META';
export const setMetaAction = payload => ({
	type: SET_META,
	payload,
});

