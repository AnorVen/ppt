import { getSeminarsRequest, getSeminarRequest } from '@/components/requests/seminars';
import { setCheckboxListOptionsAction, setSeminars } from '@/components/store/store';
import { put, call, takeEvery, select } from 'redux-saga/effects';
import store from '@/components/store/store'

export function* createSeminarSaga() {
	console.log('createSeminarSaga');
}

export function* updateSeminarSaga() {
	console.log('updateSeminarSaga');
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
		console.log('finally');
	}

}

export function* getSeminarSaga({uuid}) {
	console.log('getSeminarSaga', uuid);
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
		console.log('finally');
	}
}

export function* deleteSeminarSaga({uuid}) {
	console.log('deleteSeminarSaga', uuid);
}