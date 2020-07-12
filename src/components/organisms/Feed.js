import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import Issue from '../atoms/Issue';
import AddIssue from '../molecules/AddIssue';

const Feed = () => {
	const { issues, addIssue, fetchInitialData } = useContext(MainContext);

	useEffect(() => fetchInitialData(), []);

	return (
		<>
			<div>There are {issues.length} issues</div>
			<button
				onClick={() =>
					addIssue(
						'John Smith',
						'Low',
						'he was late',
						`300${Math.round(Math.random() * 10000)}`
					)
				}
			>
				Add new issue
			</button>
			<Issue />
			<AddIssue />
		</>
	);
};

export default Feed;
