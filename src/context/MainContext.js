import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducer';
import firebase, { db } from '../config';

const initialState = {
	issues: [],
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

	const addIssue = async (creator, priority, description, studentID) => {
		await db
			.collection('issues')
			.add({
				creator,
				priority,
				description,
				student: `students/${studentID}`,
				createdAt: firebase.firestore.Timestamp.now(),
			})
			.then(function (docRef) {
				console.log('Document written with ID: ', docRef.id);
				dispatch({
					type: 'ADD_ISSUE',
					payload: docRef.id,
				});
			})
			.catch(function (error) {
				console.error('Error adding document: ', error);
			});
	};

	return (
		<MainContext.Provider
			value={{ issues: state.issues, addIssue, fetchInitialData }}
		>
			{children}
		</MainContext.Provider>
	);
};
export default MainContextProvider;
