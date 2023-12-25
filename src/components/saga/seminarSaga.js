import { createCourseRequest } from '@/components/requests/courses';
import {
	getSeminarsRequest,
	getSeminarRequest,
	addSeminarRequest,
	updateSeminarRequest, deleteSeminarRequest,
} from '@/components/requests/seminars';
import { getCoursesSaga, updateCourseSaga } from '@/components/saga/courseSaga';
import { courseForm, seminarForm } from '@/components/selectors';
import { setActiveCourse, setCheckboxListOptionsAction, setSeminars } from '@/components/store/store';
import { reset } from 'redux-form';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import store from '@/components/store/store'

export function* createSeminarSaga({variant}) {
	console.log(variant);
	try {
		let formName = variant === 'additional_program' ? 'additional_program' : 'seminar'
		const data = yield select(seminarForm(formName))
		data.type =  variant;
		if (data._id){
			yield call(updateSeminarSaga, {variant: variant})
			return
		}

		const { success, payload, errors, headers } = yield call(addSeminarRequest, data);
		if (success){
			yield put(setActiveCourse(undefined))
			yield call(getSeminarsSaga)
			yield put(reset(formName))
		}
	} catch (e){
		console.log(e);
	} finally {

	}
}

export function* updateSeminarSaga({variant}) {
	try {
		let formName = variant === 'additional_program' ? 'additional_program' : 'seminar'
		const data = yield select(seminarForm(formName))
		if (!data._id){
			yield call(createSeminarSaga, {variant: variant})
			return
		}
		const { success, payload, errors, headers } = yield call(updateSeminarRequest, data);
		if (success){
			yield put(setActiveCourse(undefined))
			yield call(getSeminarsSaga)
			yield put(reset(formName))
		}
	} catch (e){

		console.log(e);
	} finally {

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

export function* deleteSeminarSaga({id}) {
	console.log('deleteSeminarSaga', id);
	try {
		const { success, payload, errors, headers } = yield call(deleteSeminarRequest,{
			_id: id
		} );
		if (success) {
			yield call(getSeminarsSaga)
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {

	}
}