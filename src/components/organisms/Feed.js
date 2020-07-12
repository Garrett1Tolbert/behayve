import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import Issue from '../atoms/Issue';
import AddIssue from '../molecules/AddIssue';
import styled from '@emotion/styled';
import Header from '../molecules/Header';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Grid = styled.div`
	padding: 36px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
	gap: 16px;
`;

const Feed = () => {
	const { issues, addIssue, fetchInitialData } = useContext(MainContext);

	useEffect(() => fetchInitialData(), []);

	return (
		<Wrapper>
			<Header />
			{/* <button
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
			</button> */}
			<Grid>
				<Issue />
				<Issue />
				<Issue />
				<Issue />
			</Grid>
			{/* <AddIssue /> */}
		</Wrapper>
	);
};

export default Feed;
