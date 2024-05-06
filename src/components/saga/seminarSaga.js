import { createCourseRequest } from '@/components/requests/courses';
import {
	getSeminarsRequest,
	getSeminarRequest,
	addSeminarRequest,
	updateSeminarRequest, deleteSeminarRequest,
} from '@/components/requests/seminars';
import { getCoursesSaga, updateCourseSaga } from '@/components/saga/courseSaga';
import { courseForm, seminarForm } from '@/components/selectors';
import {
	setActiveCourse,
	setCheckboxListOptionsAction,
	setIsShowPopup,
	setIsShowPopupText,
	setSeminars,
} from '@/components/store/store';
import { revalidateSeminar, revalidateUsers } from '@/utils/serverUtils';
import { reset } from 'redux-form';
import { put, call, takeEvery, select } from 'redux-saga/effects';

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
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText('Данные о семинаре добавлены'))
		}else {
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${errors}`))
		}
	} catch (e){
		console.log(e);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${e}`))
	} finally {
		yield call(revalidateSeminar)
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
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText('Данные о семинаре обновлены'))
		} else {
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${errors}`))
		}
	} catch (e){
		console.log(e);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${e}`))
	} finally {
		yield call(revalidateSeminar)
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
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText('Данные о семинаре удалены'))
		} else {
			console.log('errors', errors);
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText('Проблема с удалением'))
		}
	} catch (error) {
		console.log(error);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText('Проблема с удалением'))
	} finally {
		yield call(revalidateSeminar)
	}
}