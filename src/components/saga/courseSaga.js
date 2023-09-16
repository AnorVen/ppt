import { getCourseRequest, getCoursesRequest } from '@/components/requests/courses';
import { getTrainersRequest, getTrainerRequest } from '@/components/requests/trainers';
import {
	setCheckboxFiltersAction,
	setCheckboxListOptionsAction,
	setCourses,
	setTrainers,
} from '@/components/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { put, call, takeEvery, select } from 'redux-saga/effects';

export function* createCourseSaga() {
	console.log('createCourseSaga');
}

export function* updateCourseSaga() {
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