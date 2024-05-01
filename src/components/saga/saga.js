import {
	createCenterSaga,
	deleteCenterSaga,
	getCenterSaga,
	getCentersSaga,
	updateCenterSaga,
} from '@/components/saga/centerSaga';
import { deleteCitySaga, getCitiesSaga, getCitySaga, createCitySaga, updateCitySaga } from '@/components/saga/citySaga';
import {
	createCourseSaga,
	deleteCourseSaga,
	getCourseSaga,
	getCoursesSaga,
	updateCourseSaga,
} from '@/components/saga/courseSaga';
import { checkAuthSaga, loginSaga, logoutSaga, registrationSaga, uploadSaga } from '@/components/saga/loginSaga';
import {
	createSeminarSaga,
	deleteSeminarSaga, getSeminarSaga,
	getSeminarsSaga,
	updateSeminarSaga,
} from '@/components/saga/seminarSaga';
import {
	createTrainerSaga,
	deleteTrainerSaga,
	getTrainerSaga,
	getTrainersSaga,
	updateTrainerSaga,
} from '@/components/saga/trainerSaga';

import { takeEvery } from 'redux-saga/effects';

import {
	CREATE_CITY,
	CREATE_COURSE,
	CREATE_SEMINAR,
	CREATE_TRAINER,
	DELETE_CITY,
	DELETE_COURSE,
	DELETE_SEMINAR,
	DELETE_TRAINER,
	GET_CITIES,
	GET_CITY,
	GET_COURSE,
	GET_COURSES,
	GET_SEMINAR,
	GET_SEMINARS,
	GET_TRAINER,
	GET_TRAINERS,
	UPDATE_CITY,
	UPDATE_COURSE,
	UPDATE_SEMINAR,
	UPDATE_TRAINER,
	LOGIN,
	LOGOUT,
	CHECK_AUTH,
	REGISTRATION,
	UPLOAD_FILE,
	GET_CENTERS,
	CREATE_CENTER, UPDATE_CENTER, DELETE_CENTER, GET_CENTER,
} from '../actions';


export default function* saga() {
	yield takeEvery(CREATE_COURSE, createCourseSaga);
	yield takeEvery(UPDATE_COURSE, updateCourseSaga);
	yield takeEvery(DELETE_COURSE, deleteCourseSaga);
	yield takeEvery(GET_COURSES, getCoursesSaga);
	yield takeEvery(GET_COURSE, getCourseSaga);

	yield takeEvery(CREATE_CENTER, createCenterSaga);
	yield takeEvery(UPDATE_CENTER, updateCenterSaga);
	yield takeEvery(DELETE_CENTER, deleteCenterSaga);
	yield takeEvery(GET_CENTERS, getCentersSaga);
	yield takeEvery(GET_CENTER, getCenterSaga);

	yield takeEvery(CREATE_CITY, createCitySaga);
	yield takeEvery(UPDATE_CITY, updateCitySaga);
	yield takeEvery(DELETE_CITY, deleteCitySaga);
	yield takeEvery(GET_CITIES, getCitiesSaga);
	yield takeEvery(GET_CITY, getCitySaga);

	yield takeEvery(CREATE_TRAINER, createTrainerSaga);
	yield takeEvery(UPDATE_TRAINER, updateTrainerSaga);
	yield takeEvery(DELETE_TRAINER, deleteTrainerSaga);
	yield takeEvery(GET_TRAINERS, getTrainersSaga);
	yield takeEvery(GET_TRAINER, getTrainerSaga);

	yield takeEvery(CREATE_SEMINAR, createSeminarSaga);
	yield takeEvery(UPDATE_SEMINAR, updateSeminarSaga);
	yield takeEvery(DELETE_SEMINAR, deleteSeminarSaga);
	yield takeEvery(GET_SEMINARS, getSeminarsSaga);
	yield takeEvery(GET_SEMINAR, getSeminarSaga);

	yield takeEvery(LOGIN, loginSaga);
	yield takeEvery(LOGOUT, logoutSaga);
	yield takeEvery(CHECK_AUTH, checkAuthSaga);
	yield takeEvery(REGISTRATION, registrationSaga);
	yield takeEvery(UPLOAD_FILE, uploadSaga);


}
