export const initialState = {
	courses: [],
};

const pptReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};

export default pptReducer;
