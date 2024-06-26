import store from '@/components/store/store';
import moment from 'moment';
import { createSelector } from 'reselect'
import { getFormValues } from 'redux-form';
import { FORM_NAME } from '@/app/constants';

const mainState = state => state.main || {};

export const additionalProgramMoules = () =>
	createSelector(getFormValues('seminar'), formValues => {
		return formValues?.modules || [];
	});

export const courseForm = (type) =>
	createSelector(getFormValues(type), formValues => {
		return formValues || {};
	});

export const seminarForm = (variant) =>
	createSelector(getFormValues(variant), formValues => {
		return formValues || {};
	});

export const getForm = (formName) =>
	createSelector(getFormValues(formName), formValues => {
		return formValues || {};
	});

export const centerForm = () =>
	createSelector(getFormValues('center'), formValues => {
		return formValues || {};
	});

export const aboutForm = () =>
	createSelector(getFormValues('about'), formValues => {
		return formValues || {};
	});

export const getInitialValuesAdditionalProgramSelector = () =>
	createSelector(mainState, getFormValues('additional_program'), ({ user }, formValues) => {
		return formValues || {
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
