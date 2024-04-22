import { COLUMNS } from '@/app/constants';
import { constants, centers } from '@/constants';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import saga from '@/components/saga/saga';
import { reducer as formReducer } from 'redux-form'

const mainSlice = createSlice({
	name: 'main',
	initialState: {
		isShowPopup: false,
		isShowPopupText: '',
		courses: [],
		trainers: {},
		seminars: [],
		centers: [],
		cities: {},
		isTableDataLoading: false,
		sorting: {
			// TODO soting
	//		column: 'type',
	//		direction: 'asc',
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
		},{}),
		openedFilterDropdownId: '',
		descriptionInPopup: '',
		isDescriptionPopupShow: false,
		isFiltersVisible: true,
		checkboxListOptions: {
			withCourseType: Object.entries(constants.types).reduce((acc, [key, val]) => {
				acc.push({ key: key, value: key, text: val });
				return acc;
			}, []),
			withCity: [],
			withModule: Object.entries(constants.base_themes).reduce((acc, [key, val]) => {
				acc.push({ key: key, value: key, text: val });
				return acc;
			}, []).concat(Object.entries(constants.master_themes).reduce((acc, [key, val]) => {
				acc.push({ key: key, value: key, text: val });
				return acc;
			}, [])),
			withTrainer: [],
		},
		checkboxListSearch: {
			withCity: '',
			withModule: '',
			withTrainer: '',
			withCourseType: '',
		},
		from: new Date().toISOString().split('T')[0],
		to: null,
		isMobile: false,
		isAuth: false,
		user: {
			"email": "efremovgs@gmail.com",
			"id": "64fc702ff2a33710dc44ba6d",
			"phone": "+1111111",
			"name": "Георгий",
			"second_name": "Георгий",
			"surname": "Георгий",
			"city": "64f6278716e2f16288748521",
			"description": "123123",
			"master": false,
			"superUser": true,
			"type": "manager",
			"avatar": ""
		},
		isAuthLoading: false,
		mainAboutText: "",
		descriptionNewCourses: '',
		activeCourse: undefined,
		editableUser: undefined,
	},

	reducers: {
		setIsShowPopup: (state,  action) => {
			return {
				...state,
				isShowPopup: action.payload,
			};
		},
		setIsShowPopupText: (state,  action) => {
			return {
				...state,
				isShowPopupText: action.payload,
			};
		},

		setEditableUser: (state,  action) => {
			return {
				...state,
				editableUser: action.payload,
			};
		},
		setActiveCourse: (state,  action) => {
			return {
				...state,
				activeCourse: action.payload,
			};
		},
		setDescriptionNewCourses: (state,  action) => {
			return {
				...state,
				descriptionNewCourses: action.payload,
			};
		},
		setAboutText: (state, action) => {
			return {
				...state,
				mainAboutText: action.payload,
			};
		},
		setCheckboxListOptionsAction: (state, action) => {
			return {
				...state,
				checkboxListOptions: action.payload,
			};
		},
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
		setTrainers: (state, action) => {
			return {
				...state,
				trainers: action.payload,
			};
		},
		setTrainer: (state, action) => {
			return {
				...state,
				trainers: {
					...state.trainers,
					...action.payload
				},
			};
		},
		setSeminars: (state, action) => {
			return {
				...state,
				seminars: action.payload,
			};
		},
		setCenters: (state, action) => {
			return {
				...state,
				centers: action.payload,
			};
		},
		setCourses: (state, action) => {
			return {
				...state,
				courses: action.payload,
			};
		},
		setCities: (state, action) => {
			return {
				...state,
				cities: action.payload,
			};
		},
		setIsTableDataLoading: (state, action) => {
			return {
				...state,
				isTableDataLoading: action.payload,
			};
		},
		setIsMobileAction: (state, action) => {
			return {
				...state,
				isMobile: action.payload,
			};
		},
		setIsAuthAction: (state, action) => {
			return {
				...state,
				isAuth: action.payload,
			};
		},
		setUserAction: (state, action) => {
			return {
				...state,
				user: action.payload,
			};
		},
		setIsAuthLoadingAction: (state, action) => {
			return {
				...state,
				isAuthLoading: action.payload,
			};
		},
	},
});
export const {
	setIsAuthAction,
	setUserAction,
	setIsAuthLoadingAction,
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
	setTrainers,
	setTrainer,
	setSeminars,
	setCenters,
	setCities,
	setCheckboxListOptionsAction,
	setIsMobileAction,
	setAboutText ,
	setDescriptionNewCourses ,
	setActiveCourse,
	setEditableUser,
	setIsShowPopup,
	setIsShowPopupText
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
		form: formReducer
	},
	middleware: [sagaMiddleware, logger],

});


sagaMiddleware.run(saga);

export default store;