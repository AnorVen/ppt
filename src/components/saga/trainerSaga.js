import {
	getTrainersRequest,
	getTrainerRequest,
	updateTrainerRequest,
	deleteTrainerRequest, createTrainerRequest,
} from '@/components/requests/trainers';
import { checkAuthSaga } from '@/components/saga/loginSaga';
import { centerForm, getForm } from '@/components/selectors';
import {
	setAboutText,
	setCheckboxFiltersAction,
	setCheckboxListOptionsAction, setIsShowPopup, setIsShowPopupText,
	setTrainer,
	setTrainers, setUserAction,
} from '@/components/store/store';
import { setUser } from '@/utils';
import { revalidateUsers } from '@/utils/serverUtils';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, reset } from 'redux-form';
import { put, call, takeEvery, select } from 'redux-saga/effects';

import store from '@/components/store/store'

export function* createTrainerSaga({formName = 'about'}) {
	console.log(formName);
	try {
		const user = getForm(formName)
		const { success, payload, errors, headers } = yield call(createTrainerRequest, user);
		if (success) {
			yield put(setUserAction(payload))
			yield put(setAboutText(payload.description))
			yield put(initialize('about', payload, false, {
				updateUnregisteredFields: true,
				keepValues: false,
			}))
			yield call(getTrainersSaga)
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText('Данные о тренере добавлены'))
		}
		else {
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${errors}`))
		}
	} catch (error) {
		console.log(error);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${error}`))
	} finally {
		yield call(revalidateUsers)
	}
}

export function* updateTrainerSaga({formName = 'about'}) {
	try {
		const user = getForm(formName)
		console.log('updateTrainerSaga', user);
		if (!Object.values(user).length){
			new Error('Нет данных пользователя')
		}
		const { success, payload, errors, headers } = yield call(updateTrainerRequest, user);
		if (success) {
			yield put(setUserAction(payload))
			yield put(setAboutText(payload.description))
			yield put(initialize('about', payload, false, {
				updateUnregisteredFields: true,
				keepValues: false,
			}))
			yield call(getTrainersSaga)
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText('Данные о тренере обновлены'))
		}
		else {
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${errors}`))
		}
	} catch (error) {
		console.log(error);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${error}`))
	} finally {
		yield call(revalidateUsers)
	}
}

export function* getTrainersSaga() {
	try {
		const { success, payload, errors, headers } = yield call(getTrainersRequest);
		if (success) {
			const checkboxListOptions = store.getState().main.checkboxListOptions
			yield put(setCheckboxListOptionsAction({...checkboxListOptions,
				withTrainer: payload.reduce((acc, trainer) => {
					const name = `${trainer?.surname} ${trainer?.name}`
					acc.push({ key: trainer.id, value: trainer.id, text: name });
					return acc;
				}, [])
			}))

			yield put(setTrainers(
				payload.reduce((acc, val) => {
				acc[val.id] = val
				return acc
			}, {})
			))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {

	}

}

export function* getTrainerSaga({id}) {
	console.log('getTrainerSaga', id);
	try {
		const { success, payload, errors, headers } = yield call(getTrainerRequest, {
			id
		} );
		if (success) {
			yield put(setTrainer({ [payload.id] : payload}))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {

	}
}

export function* deleteTrainerSaga({formName = 'about'}) {
	try {
		const {id} = getForm(formName)
		console.log('id', id);
		const { success, payload, errors, headers } = yield call(deleteTrainerRequest, {
			id
		} );
		if (success){
			yield call(getTrainersSaga)
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText('Тренер удален'))
		} else {
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Удаление прошло неудачно - ${errors}`))
		}
	} catch (error) {
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Удаление прошло неудачно - ${error}`))
	} finally {
		yield call(revalidateUsers)
	}
}