import { getTrainersRequest, getTrainerRequest } from '@/components/requests/trainers';
import { setCheckboxFiltersAction, setCheckboxListOptionsAction, setTrainers } from '@/components/store/store';
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

			yield put(setTrainers(payload.reduce((acc, val) =>{
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

export function* getTrainerSaga({uuid}) {
	console.log('getTrainerSaga', uuid);
	try {
		const { success, payload, errors, headers } = yield call(getTrainerRequest,{
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

export function* deleteTrainerSaga({uuid}) {
	console.log('deleteTrainerSaga', uuid);
}