export default (state, action) => {
	switch (action.type) {
		case 'ADD_ISSUE':
			return {
				issues: [...state.issues, action.payload],
			};
		case 'TOGGLE_SIDEBAR':
			return {
				...state,
				showSidebar: action.payload,
			};
		default:
			return state;
	}
};
