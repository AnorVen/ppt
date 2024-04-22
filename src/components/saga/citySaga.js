import { createCityRequest, getCitiesRequest } from '@/components/requests/cities';
import {
	setCheckboxFiltersAction,
	setCheckboxListOptionsAction,
	setCities,
	setIsShowPopup, setIsShowPopupText,
} from '@/components/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { put, call, takeEvery, select } from 'redux-saga/effects';

import store from '@/components/store/store'

export function* createCitySaga({ newCity }) {
	console.log('createCitySaga', newCity);
	try {
		const { success, payload, errors, headers } = yield call(createCityRequest, {
			name: newCity });
		if (success) {
			yield call(getCitiesSaga)
			yield put(setIsShowPopup(true))
			yield put(setIsShowPopupText(`Город добавлен`))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
		yield put(setIsShowPopup(true))
		yield put(setIsShowPopupText(`Сохранение прошло неудачно - ${error}`))
	} finally {

	}
}

export function* updateCitySaga() {
	console.log('updateCitySaga');
}

export function* getCitiesSaga() {
	try {
		const { success, payload, errors, headers } = yield call(getCitiesRequest);
		if (success) {
			const checkboxListOptions = store.getState().main.checkboxListOptions
			payload.sort((a,b) =>{
				if(a.name > b.name) return 1
				if(a.name < b.name) return -1
				return 0
			})
			payload.forEach(item => {
				item.name = item.name.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
				item.name = item.name.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('-')
				return item
			})
			yield put(setCities(payload.reduce((acc, val) =>{
				acc[val._id] = val.name
				return acc
			}, {})))

			yield put(setCheckboxListOptionsAction({...checkboxListOptions,
				withCity: payload.reduce((acc, {_id, name}) => {
					acc.push({ key: _id, value: _id, text: name });
					return acc;
				}, [])
			}))
		} else {
			console.log('errors', errors);
		}
	} catch (error) {
		console.log(error);
	} finally {

	}

}

export function* getCitySaga({uuid}) {
	console.log('getCitySaga', uuid);
	try {
		const { success, payload, errors, headers } = yield call(getCityRequest,{
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

export function* deleteCitySaga({uuid}) {
	console.log('deleteCitySaga', uuid);
}