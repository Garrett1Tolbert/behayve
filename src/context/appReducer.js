export default (state, action) => {
	switch (action.type) {
		case 'ADD_ISSUE':
			return {
				issues: [...state.issues, action.payload],
			};
		default:
			return state;
	}
};
