import store from '@/components/store/store';
import moment from 'moment';
import { createSelector } from 'reselect'
import { getFormValues } from 'redux-form';
import { FORM_NAME } from '@/app/constants';

const mainState = state => state.main || {};

export const additionalProgramMoules = () =>
	createSelector(getFormValues('seminar'), formValues => {
		console.log('formValues', formValues);
		return formValues?.modules || [];
	});
export const courseForm = () =>
	createSelector(getFormValues('course'), formValues => {
		console.log('formValues', formValues);
		return formValues || {};
	});

export const seminarForm = () =>
	createSelector(getFormValues('seminar'), formValues => {
		console.log('formValues', formValues);
		return formValues || {};
	});


export const getInitialValuesAdditionalProgramSelector = () =>
	createSelector(mainState, seminarForm, ({ user }, form) => {
		if (Object.keys(form).length){
			return form
		}
		return {
			main_trainer: user.id,
			type: 'seminar',
			modules: [{
				module_number: 1,
				trainer: '',
				dates: [],
				count: 0,
				them: '',
				description: '',
				city: '',
			},
			],
		};
	});

export const getInitialValuesSeminarSelector = () =>
	createSelector(mainState, seminarForm, ({ user }, form) => {
		if (Object.keys(form).length){
			return form
		}
		return {
			type: 'seminar',
			main_trainer: user.id,
		};
	});
