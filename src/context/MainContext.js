import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';
import firebase, { db } from '../config';

const initialState = {
	issues: [],
	showSidebar: false,
};
export const MainContext = createContext(initialState);

const MainContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	const fetchInitialData = async () => {
		await db
			.collection('issues')
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					dispatch({
						type: 'ADD_ISSUE',
						payload: doc.data(),
					});
				});
			});
	};

	const toggleSidebar = () => {
		console.log(state);
		dispatch({
			type: 'TOGGLE_SIDEBAR',
			payload: !state.showSidebar,
		});
	};

	const addIssue = async (creator, student, priority, description) => {
		const data = {
			creator,
			priority,
			description,
			student,
			createdAt: firebase.firestore.Timestamp.now(),
		};
		await db
			.collection('issues')
			.add(data)
			.then(function (docRef) {
				console.log('Document written with ID: ', docRef.id);
				dispatch({
					type: 'ADD_ISSUE',
					payload: data,
				});
			})
			.catch(function (error) {
				console.error('Error adding document: ', error);
			});
	};

	return (
		<MainContext.Provider
			value={{
				issues: state.issues,
				showSidebar: state.showSidebar,
				addIssue,
				fetchInitialData,
				toggleSidebar,
			}}
		>
			{children}
		</MainContext.Provider>
	);
};
export default MainContextProvider;
