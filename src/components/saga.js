import { put, call, takeEvery, select } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { change, stopSubmit, touch } from 'redux-form';

import {
	CREATE,
	GET_COURSE,
	GET_COURSES, UPDATE,
} from './actions';
import { } from './selectors';
import { FORM_NAME, REQUEST_ERROR_MESSAGE, SELECT_FIELDS, ROOT_URL } from './constants';

function* createSaga() {
	console.log('createSaga');
}

function* updateSaga() {
	console.log('updateSaga');
}

export function* getCoursesSaga() {
	console.log('getCoursesSaga');
}

export function* getCourseSaga({uuid}) {
	console.log('getCoursesSaga', uuid);
}

export function* deleteCourseSaga({uuid}) {
	console.log('getCoursesSaga', uuid);
}

export default function* saga() {
	yield takeEvery(CREATE, createSaga);
	yield takeEvery(UPDATE, updateSaga);
	yield takeEvery(DELETE, deleteCourseSaga);
	yield takeEvery(GET_COURSES, getCoursesSaga);
	yield takeEvery(GET_COURSE, getCourseSaga);
}
