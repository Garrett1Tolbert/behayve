import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';

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
		</>
	);
};

export default Feed;
