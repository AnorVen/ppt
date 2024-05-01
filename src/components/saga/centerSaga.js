
import {
	createCenterRequest,
	deleteCenterRequest, getCenterRequest,
	getCentersRequest,
	updateCenterRequest,
} from '@/components/requests/centers';
import { centerForm, courseForm } from '@/components/selectors';
import {
	setCheckboxListOptionsAction,
	setIsShowPopup, setIsShowPopupText,
	setCenters,
} from '@/components/store/store';
import { revalidatePath } from 'next/cache';
import { put, call, takeEvery, select } from 'redux-saga/effects';

import store from '@/components/store/store'


export function* createCenterSaga(newCenter) {
	console.log('createCenterSaga', newCenter);
	try {
		const { success, payload, errors, headers } = yield call(createCenterRequest,
			newCenter );
		if (success) {
			yield call(getCentersSaga)
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Центр добавлен`))
		} else {
			console.log('errors', errors);
			console.log(error);
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${error}`))
		}
	} catch (error) {
		console.log(error);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${error}`))
	} finally {
		revalidatePath('/centers', 'page')
	}
}

export function* updateCenterSaga() {
	const data = yield select(centerForm());
	console.log('updateCenterSaga',data);
	if (data._id){
		try {
			const { success, payload, errors, headers } = yield call(updateCenterRequest,
				data);
			if (success) {
				yield call(getCentersSaga)
				yield put(setIsShowPopup(true))
				yield put(setIsShowPopupText(`Центр обновлен`))
			} else {
				console.log('errors', errors);
				yield put(setIsShowPopup(true))
				yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${errors}`))
			}
		} catch (error) {
			console.log(error);
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${error}`))
		} finally {
			revalidatePath('/centers')
		}
	}
	else {
		yield call(createCenterSaga, data)
	}

}


export function* deleteCenterSaga() {
	const data = yield select(centerForm());
	console.log('deleteCenterSaga', data._id);
	try {
		const { success, payload, errors, headers } = yield call(deleteCenterRequest, { _id: data._id });
		if (success) {
			yield call(getCentersSaga)
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Центр удален`))
		} else {
			console.log('errors', errors);
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${errors}`))
		}
	} catch (error) {
		console.log(error);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${error}`))
	} finally {
		revalidatePath('/centers')
	}
}
export function* getCentersSaga() {
	try {
		const { success, payload, errors, headers } = yield call(getCentersRequest);
		if (success) {
			const checkboxListOptions = store.getState().main.checkboxListOptions
			yield put(setCheckboxListOptionsAction({...checkboxListOptions,
				withCenter: payload.reduce((acc, trainer) => {
					const name = `${trainer?.surname} ${trainer?.name}`
					acc.push({ key: trainer._id, value: trainer._id, text: name });
					return acc;
				}, [])
			}))

			yield put(setCenters(payload.reduce((acc, val) =>{
				acc[val._id] = val
				return acc
			}, {})))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {

	}

}

export function* getCenterSaga({uuid}) {
	console.log('getCenterSaga', uuid);
	try {
		const { success, payload, errors, headers } = yield call(getCenterRequest,{
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

