import {
	createCourseRequest,
	getCourseRequest,
	getCoursesRequest,
	updateCourseRequest,
} from '@/components/requests/courses';
import { getTrainersRequest, getTrainerRequest } from '@/components/requests/trainers';
import { courseForm } from '@/components/selectors';
import {
	setCheckboxFiltersAction,
	setCheckboxListOptionsAction,
	setCourses,
	setTrainers,
} from '@/components/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { change, reset } from 'redux-form';
import { put, call, takeEvery, select } from 'redux-saga/effects';

export function* createCourseSaga() {
	try {
		const data = yield select(courseForm())
		console.log('data', data);
		if (data._id){
			yield call(updateCourseSaga)
			return
		}
		const { success, payload, errors, headers } = yield call(createCourseRequest, data);
		if (success){
			yield call(getCoursesSaga)
			console.log(yield select(courseForm()));
		}
	} catch (e){

	console.log(e);
	} finally {
		yield put(reset('course'))
	}
}

export function* updateCourseSaga() {
	try {
		const data = yield select(courseForm())
		if (!data._id){
			yield call(updateCourseSaga)
			return
		}
		const { success, payload, errors, headers } = yield call(updateCourseRequest, data);
		if (success){
			yield call(getCoursesSaga)
		}
	} catch (e){

		console.log(e);
	} finally {
		yield put(reset('course'))
	}
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

	}
}

export function* deleteCourseSaga({uuid}) {
	console.log('deleteCourseSaga', uuid);
}