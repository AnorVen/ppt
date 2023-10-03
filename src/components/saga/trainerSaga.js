import { getTrainersRequest, getTrainerRequest } from '@/components/requests/trainers';
import {
	setCheckboxFiltersAction,
	setCheckboxListOptionsAction,
	setTrainer,
	setTrainers,
} from '@/components/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { put, call, takeEvery, select } from 'redux-saga/effects';

import store from '@/components/store/store'

export function* createTrainerSaga() {
	console.log('createTrainerSaga');
}

export function* updateTrainerSaga() {
	console.log('updateTrainerSaga');
}

export function* getTrainersSaga() {
	try {
		const { success, payload, errors, headers } = yield call(getTrainersRequest);
		if (success) {
			const checkboxListOptions = store.getState().main.checkboxListOptions
			yield put(setCheckboxListOptionsAction({...checkboxListOptions,
				withTrainer: payload.reduce((acc, trainer) => {
					const name = `${trainer?.surname} ${trainer?.name}`
					acc.push({ key: trainer._id, value: trainer._id, text: name });
					return acc;
				}, [])
			}))

			yield put(setTrainers(payload.reduce((acc, val) => {
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

export function* getTrainerSaga({id}) {
	console.log('getTrainerSaga', id);
	try {
		const { success, payload, errors, headers } = yield call(getTrainerRequest, {
			id
		} );
		if (success) {
			yield put(setTrainer({ [payload._id] : payload}))
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