import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const Feed = () => {
	const { issues, addIssue } = useContext(MainContext);
	return (
		<>
			<div>There are {issues.length} issues</div>
			<button onClick={addIssue}>Add new issue</button>
		</>
	);
};

export default Feed;
