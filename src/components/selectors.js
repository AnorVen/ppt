import moment from 'moment';
import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';
import { initialState } from './reducer';
import { FORM_NAME } from './constants';

const selectNewsEditorPageDomain = state => state.pptReducer || initialState;

export const getActiveAccordionIndexSelector = () =>
	createSelector(selectNewsEditorPageDomain, ({ activeAccordionIndex }) => activeAccordionIndex);

export const getFormValuesSelector = () =>
	createSelector(getFormValues(FORM_NAME), formValues => {
		return formValues;
	});

export const getPayloadForRequestSelector = () =>
	createSelector(selectNewsEditorPageDomain, getFormValuesSelector(), ({ mainTextValue, tags }, formValues) => {
		return {
			...formValues,
			text: mainTextValue,
			timestamp: moment(formValues.timestamp).format('YYYY-MM-DDTHH:mm:ssZ'),
			tags,
			is_active: formValues.is_active || false,
		};
	});

export const getTagsSelector = () => createSelector(selectNewsEditorPageDomain, ({ tags }) => tags || []);

export const getNewNewsTagSelector = () => createSelector(selectNewsEditorPageDomain, ({ newTag }) => newTag);

export const getSectorsFormInitiailValuesSelector = () =>
	createSelector(selectNewsEditorPageDomain, ({ news }) => {
		if (!news) return {};
		return {
			...news,
			timestamp: moment(news.timestamp).format('YYYY-MM-DD'),
		};
	});

export const getLoadingFiltersIdArraySelector = () =>
	createSelector(selectNewsEditorPageDomain, ({ isDictionariesLoading }) => {
		return isDictionariesLoading ? ['save'] : [];
	});

export const getDisabledFiltersIdArraySelector = () =>
	createSelector(selectNewsEditorPageDomain, ({ isNewsLoading }) => {
		return isNewsLoading ? ['save'] : [];
	});
export const getMainTextValueSelector = () =>
	createSelector(selectNewsEditorPageDomain, ({ mainTextValue }) => mainTextValue);

export const getIsNewsLoadingSelector = () =>
	createSelector(selectNewsEditorPageDomain, ({ isNewsLoading }) => {
		return isNewsLoading;
	});
