import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';

const initialState = {
	issues: [],
};
export const MainContext = createContext(initialState);

const MainContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const addIssue = () => {
		dispatch({
			type: 'ADD_ISSUE',
			payload: Math.round(Math.random() * 10),
		});
	};

	return (
		<MainContext.Provider value={{ issues: state.issues, addIssue }}>
			{children}
		</MainContext.Provider>
	);
};
export default MainContextProvider;
