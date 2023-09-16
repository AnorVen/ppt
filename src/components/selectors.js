import store from '@/components/store/store';
import moment from 'moment';
import { createSelector } from 'reselect'
import { getFormValues } from 'redux-form';
import { FORM_NAME } from '@/app/constants';

const selectPptDomain = state => {
	console.log(state);
	return  state || store.main;
}

const selectAllPets = state => state.pets.data;
export const selectAllDogs = createSelector(
	selectPptDomain,
	allPets => allPets
);