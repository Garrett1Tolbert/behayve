import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	margin-top: 24px;
	padding: 12px 24px;
	width: 100vw;
	display: grid;
	justify-items: flex-start;
	align-content: center;
	grid-template-columns: 1fr 3fr 1fr;
`;

const Title = styled.p`
	font-size: 32px;
	color: #525456;
	font-weight: 500;
	margin: 0;
`;

const FilterButtons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
`;
const IconContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
`;

const FilterButton = styled.div`
	background: ${({ bg }) => bg};
	color: ${({ color }) => color};
	border-radius: 8px;
	padding: 12px 24px;
	font-size: 18px;
	cursor: pointer;
	transition: all 0.3s;
	:hover {
		transform: scale(1.25);
	}
`;

const Icon = styled.i`
	font-size: 24px;
	color: ${({ color }) => color};
	margin-left: 8px;
`;

const Toolbar = () => {
	return (
		<Container>
			<Title>Feed</Title>
			<FilterButtons>
				<FilterButton bg='#f5f5f5' color='#525456'>
					Low
				</FilterButton>
				<FilterButton bg='#FFF3E0' color='#F57C00'>
					Medium
				</FilterButton>
				<FilterButton bg='#FFEBEE' color='#D32F2F'>
					High
				</FilterButton>
				<FilterButton bg='#E3F2FD' color='#1976D2'>
					Resolved
				</FilterButton>
			</FilterButtons>
			<IconContainer>
				<Icon className='material-icons'>search</Icon>
				<Icon className='material-icons'>filter_list</Icon>
			</IconContainer>
		</Container>
	);
};

export default Toolbar;
