import { bd } from '@/bd';
import { getCoursesRequest } from '@/components/requests';
import { setCourses } from '@/components/store/store';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import { change, stopSubmit, touch } from 'redux-form';

import {
	CREATE,
	DELETE,
	GET_COURSE,
	GET_COURSES,
	UPDATE,
} from './actions';
import { } from './selectors';

function* createSaga() {
	console.log('createSaga');
}

function* updateSaga() {
	console.log('updateSaga');
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
	} catch (e) {
		console.log(e);
		yield put(setCourses(bd.courses))
	} finally {
		console.log('finally');
	}

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
