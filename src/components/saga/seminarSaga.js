import { createCourseRequest } from '@/components/requests/courses';
import { getSeminarsRequest, getSeminarRequest, addSeminarRequest } from '@/components/requests/seminars';
import { getCoursesSaga, updateCourseSaga } from '@/components/saga/courseSaga';
import { courseForm, seminarForm } from '@/components/selectors';
import { setCheckboxListOptionsAction, setSeminars } from '@/components/store/store';
import { reset } from 'redux-form';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import store from '@/components/store/store'

export function* createSeminarSaga() {
	try {
		const data = yield select(seminarForm())
		if (data._id){
			yield call(updateSeminarSaga)
			return
		}
		const { success, payload, errors, headers } = yield call(addSeminarRequest, data);
		if (success){
			yield call(getCoursesSaga)
		}
	} catch (e){
		console.log(e);
	} finally {
		yield put(reset('course'))
	}
}

export function* updateSeminarSaga() {
	try {
		const data = yield select(seminarForm())
		if (!data._id){
			yield call(createSeminarSaga)
			return
		}
		const { success, payload, errors, headers } = yield call(updateSeminarRequest, data);
		if (success){
			yield call(getCoursesSaga)
		}
	} catch (e){

		console.log(e);
	} finally {
		yield put(reset('course'))
	}
}

export function* getSeminarsSaga() {
	try {
		const { success, payload, errors, headers } = yield call(getSeminarsRequest);
		if (success) {
			yield put(setSeminars(payload))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {

	}

}

export function* getSeminarSaga({uuid}) {
	try {
		const { success, payload, errors, headers } = yield call(getSeminarRequest,{
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

	}
}

export function* deleteSeminarSaga({uuid}) {
	console.log('deleteSeminarSaga', uuid);
}