import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import Issue from '../atoms/Issue';
import AddIssue from '../molecules/AddIssue';
import styled from '@emotion/styled';
import Header from '../molecules/Header';
import Toolbar from '../molecules/Toolbar';

const Grid = styled.div`
	padding: 36px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
	gap: 16px;
`;

const Feed = () => {
	const { issues, fetchInitialData } = useContext(MainContext);

	useEffect(() => fetchInitialData(), []);

	return (
		<>
			<Header />
			<Toolbar />
			<Grid>
				{issues.map((item, idx) => (
					<Issue key={idx} data={item} />
				))}
			</Grid>
			<AddIssue />
		</>
	);
};

export default Feed;
