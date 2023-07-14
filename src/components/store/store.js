import { configureStore, createSlice } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from "@/components/saga";

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		todos: [{
			id: 1,
			name: name,
		}],
		courses: [],
	},

	reducers: {
		setCourses:  (state, action) => {
			return {
				courses: action.payload
			};
		},
		fetchData: (state, action) => {
			return {
				todos: action.payload
			};
		}
	}
});
export const { setCourses } = todoSlice.actions;

let sagaMiddleware = createSagaMiddleware();

const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	return result
}
const store = configureStore({
	reducer: {
		todo: todoSlice.reducer
	},
	middleware: [sagaMiddleware, logger],

});


sagaMiddleware.run(saga);

export default store;