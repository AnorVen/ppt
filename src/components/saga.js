import { constants } from '@/constants';
import { getCourseRequest, getCoursesRequest } from '@/components/requests/courses';
import { setCourses } from '@/components/store/store';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { change, stopSubmit, touch } from 'redux-form';

import {
	CREATE_COURSE,
	DELETE_COURSE,
	GET_COURSE,
	GET_COURSES,
	UPDATE_COURSE,
} from './actions';
import { } from './selectors';

function* createCourseSaga() {
	console.log('createCourseSaga');
}

function* updateCourseSaga() {
	console.log('updateCourseSaga');
}

export function* getCoursesSaga() {
	console.log('getCoursesSaga');
	try {
		const { success, payload, errors, headers } = yield call(getCoursesRequest);
		if (success) {
			yield put(setCourses(payload))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {
		console.log('finally');
	}

}

export function* getCourseSaga({uuid}) {
	console.log('getCourseSaga', uuid);
	try {
		const { success, payload, errors, headers } = yield call(getCourseRequest,{
			id: uuid
		} );
		if (success) {
			console.log(payload)
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {
		console.log('finally');
	}
}

export function* deleteCourseSaga({uuid}) {
	console.log('deleteCourseSaga', uuid);
}

export default function* saga() {
	yield takeEvery(CREATE_COURSE, createCourseSaga);
	yield takeEvery(UPDATE_COURSE, updateCourseSaga);
	yield takeEvery(DELETE_COURSE, deleteCourseSaga);
	yield takeEvery(GET_COURSES, getCoursesSaga);
	yield takeEvery(GET_COURSE, getCourseSaga);
}
