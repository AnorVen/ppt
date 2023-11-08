import { getTrainersRequest, getTrainerRequest, updateTrainerRequest } from '@/components/requests/trainers';
import { checkAuthSaga } from '@/components/saga/loginSaga';
import {
	setAboutText,
	setCheckboxFiltersAction,
	setCheckboxListOptionsAction,
	setTrainer,
	setTrainers, setUserAction,
} from '@/components/store/store';
import { setUser } from '@/utils';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, reset } from 'redux-form';
import { put, call, takeEvery, select } from 'redux-saga/effects';

import store from '@/components/store/store'

export function* createTrainerSaga() {
	console.log('createTrainerSaga');
}

export function* updateTrainerSaga() {
	try {
		const user = store.getState().form.about.values
		const { success, payload, errors, headers } = yield call(updateTrainerRequest, user);
		if (success) {
			yield put(setUserAction(payload))
			yield put(setAboutText(payload.description))
			yield put(initialize('about', payload, false, {
				updateUnregisteredFields: true,
				keepValues: false,
			}))
			yield call(getTrainersSaga)
		}
	} catch (error) {
		console.log(error);
	} finally {

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

export function* deleteTrainerSaga({uuid}) {
	console.log('deleteTrainerSaga', uuid);
}