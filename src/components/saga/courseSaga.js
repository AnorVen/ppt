import {
	createCourseRequest, deleteCourseRequest,
	getCourseRequest,
	getCoursesRequest,
	updateCourseRequest,
} from '@/components/requests/courses';
import { deleteSeminarRequest } from '@/components/requests/seminars';
import { courseForm } from '@/components/selectors';
import { setActiveCourse, setCourses, setIsShowPopup, setIsShowPopupText } from '@/components/store/store';
import { reset } from 'redux-form';
import { call, put, select } from 'redux-saga/effects';

export function* createCourseSaga({ variant }) {
	console.log('variant', variant);
	try {
		const data = yield select(courseForm(variant));
		console.log('data', data);
		if (data._id) {
			yield call(updateCourseSaga, {variant});
			return;
		}
		const { success, payload, errors, headers } = yield call(createCourseRequest, data);
		if (success) {
			yield put(setActiveCourse(undefined));
			yield put(reset(variant));
			yield call(getCoursesSaga);
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Курс создан`))
		}
	}
	catch (e) {

		console.log(e);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Что-то пошло не так`))
	}
	finally {

	}
}

export function* updateCourseSaga({ variant }) {
	console.log('variant', variant);
	try {
		const data = yield select(courseForm(variant));
		if (!data._id) {
			return;
		}
		const { success, payload, errors, headers } = yield call(updateCourseRequest, data);
		if (success) {
			yield put(setActiveCourse(undefined));
			yield put(reset(variant));
			yield call(getCoursesSaga);
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Курс обновлен`))

		}
	}
	catch (e) {
		console.log(e);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Что-то пошло не так`))
	}
	finally {

	}
}

export function* getCoursesSaga() {
	console.log('getCoursesSaga');
	try {
		const { success, payload, errors, headers } = yield call(getCoursesRequest);
		if (success) {
			yield put(setCourses(payload));
		} else {
			console.log('errors', errors);
		}
	}
	catch (error) {
		console.log(error);
	}
	finally {

	}

}

export function* getCourseSaga({ uuid }) {
	console.log('getCourseSaga', uuid);
	try {
		const { success, payload, errors, headers } = yield call(getCourseRequest, {
			id: uuid,
		});
		if (success) {
			console.log(payload);
		} else {
			console.log('errors', errors);
		}
	}
	catch (error) {
		console.log(error);
	}
	finally {

	}
}

export function* deleteCourseSaga({ id }) {
	console.log('deleteCourseSaga', id);
	try {
		const { success, payload, errors, headers } = yield call(deleteCourseRequest,{
			_id: id
		} );
		if (success) {
			yield call(getCoursesSaga)
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Курс удален`))
		} else {
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Что-то пошло не так`))
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {

	}
}