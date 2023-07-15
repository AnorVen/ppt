import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from "@/components/saga";

const mainSlice = createSlice({
	name: "main",
	initialState: {
		courses: [],
	},

	reducers: {
		setCourses:  (state, action) => {
			return {
				courses: action.payload
			};
		},
	}
});
export const { setCourses } = mainSlice.actions;

let sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	return result
}
const store = configureStore({
	reducer: {
		main: mainSlice.reducer
	},
	middleware: [sagaMiddleware, logger],

});


sagaMiddleware.run(saga);

export default store;