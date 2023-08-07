import { COLUMNS } from '@/app/constants';
import { bd } from '@/bd';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from '@/components/saga';

const mainSlice = createSlice({
	name: 'main',
	initialState: {
		courses: [],
		trainers: bd.trainers,
		isTableDataLoading: false,
		sorting: {
			column: 'type',
			direction: 'asc',
		},
		filterSearch: {
			withCourseType: '',
			withModule: '',
			withTrainer: ''
		},
		checkboxFilters: COLUMNS.reduce((acc, val)=> {
			if (val.filterName){
				acc[val.filterName] = {}
			}
			return acc
		},[]),
		openedFilterDropdownId: '',
		descriptionInPopup: '',
		isDescriptionPopupShow: false,
		isFiltersVisible: true,
		checkboxListOptions: {
			withCourseType: Object.entries(bd.types).reduce((acc, [key, val]) => {
				acc.push({ key: key, value: key, text: val });
				return acc;
			}, []),
			withCity: [],
			withModule: [],
			withTrainer: [],
		},
		checkboxListSearch: {
			// Строки поиска в фильтрах с checkbox
			withCity: '',
			withModule: '',
			withTrainer: '',
			withCourseType: '',
		},
		from: '',
		to: ''
	},

	reducers: {
		setCheckboxListSearchAction: (state, action) => {
			return {
				...state,
				checkboxListSearch: action.payload,
			};
		},
		setFrom: (state, action) => {
			return {
				...state,
				from: action.payload,
			};
		},
		setTo: (state, action) => {
			return {
				...state,
				to: action.payload,
			};
		},
		setCheckboxFiltersAction: (state, action) => {
			return {
				...state,
				checkboxFilters: action.payload,
			};
		},

		setFilterSearchAction: (state, action) => {
			return {
				...state,
				filterSearch: action.payload,
			};
		},
		setSortingAction: (state, action) => {
			return {
				...state,
				sorting: action.payload,
			};
		},
		setOpenedFilterDropdownIdAction: (state, action) => {
			return {
				...state,
				openedFilterDropdownId: action.payload,
			};
		},
		setIsDescriptionPopupShow: (state, action) => {
			return {
				...state,
				isDescriptionPopupShow: action.payload,
			};
		},
		setDescriptionInPopup: (state, action) => {
			return {
				...state,
				descriptionInPopup: action.payload,
			};
		},
		setCourses: (state, action) => {
			return {
				...state,
				courses: action.payload,
			};
		},
		setIsTableDataLoading: (state, action) => {
			return {
				...state,
				isTableDataLoading: action.payload,
			};
		},
	},
});
export const {
	setCheckboxListSearchAction,
	setTo,
	setFrom,
	setIsTableDataLoading,
	setCourses,
	setIsDescriptionPopupShow,
	setDescriptionInPopup,
	setOpenedFilterDropdownIdAction,
	setSortingAction,
	setFilterSearchAction,
	setCheckboxFiltersAction,

} = mainSlice.actions;

let sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
};
const store = configureStore({
	reducer: {
		main: mainSlice.reducer,
	},
	middleware: [sagaMiddleware, logger],

});


sagaMiddleware.run(saga);

export default store;