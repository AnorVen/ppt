import {
	checkAuthRequest,
	loginRequest,
	logoutRequest,
	registrationRequest,
	uploadRequest,
} from '@/components/requests/login';
import store, { setAboutText, setIsAuthAction, setIsAuthLoadingAction, setUserAction } from '@/components/store/store';
import { redirect } from 'next/navigation';
import { change } from 'redux-form';
import { call, put } from 'redux-saga/effects';

export function* loginSaga({payload: {email, password}}) {
	console.log('loginSaga', email, password);
	try {
		yield put(setIsAuthLoadingAction(true))
		const { success, payload, errors } = yield call(loginRequest, {
			email, password
		});
		if (success) {
			localStorage.setItem('token', payload.accessToken);
			yield put(setUserAction(payload.user))
			yield put(setIsAuthAction(true))
			yield put(setAboutText(payload.user.description))
			console.log(payload)
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {
		yield put(setIsAuthLoadingAction(false))
	}
}

export function* checkAuthSaga() {
	try {
		yield put(setIsAuthLoadingAction(true))
		const { success, payload, errors } = yield call(checkAuthRequest);
		if (success) {
			localStorage.setItem('token', payload.accessToken);
			yield put(setUserAction(payload.user))
			yield put(setIsAuthAction(true))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {
		yield put(setIsAuthLoadingAction(false))
	}
}

export function* registrationSaga({newUser}) {
	console.log('registrationSaga');
	try {
		yield put(setIsAuthLoadingAction(true))
		yield call(registrationRequest, newUser);
		localStorage.removeItem('token');
		yield put(setUserAction({}))
		yield put(setIsAuthAction(false))
	} catch (error) {
		console.log(error);
	}
}

export function* logoutSaga() {
	console.log('logoutSaga');
	try {
		yield put(setIsAuthLoadingAction(true))
		yield call(logoutRequest);
		localStorage.removeItem('token');
		yield put(setUserAction({}))
		yield put(setIsAuthAction(false))
	} catch (error) {
		console.log(error);
	}
}

export function* uploadSaga({file}) {
	console.log('uploadSaga', file);
	const user = store.getState().main.user
	console.log(user);
	const formData = new FormData();
	formData.append('file', file, file.name);
	formData.append('user', user.id);
	try {
		const { success, payload, errors } = yield call(uploadRequest, formData);
		if (success){
			yield put(change('about', 'avatar', payload, true))
		}

	} catch (error) {
		console.log(error);
	}
}