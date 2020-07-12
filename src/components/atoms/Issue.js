import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	min-width: 200px;
	max-width: 400px;
	display: inline-block;
	width: auto;
	height: auto;
	// box-shadow: 0 3px 5px rgba(200, 200, 200, 0.35);
	border-radius: 8px;
	padding: 16px;
	position: relative;
	z-index: 1;
	border: 1px solid #c8c8c8;
`;
const Name = styled.div`
	font-size: 20px;
	font-weight: 400;
	color: #777;
	margin-bottom: 16px;
`;
const Creator = styled.div`
	font-size: 20px;
	font-weight: 400;
	color: #777;
`;
const Description = styled.div`
	font-size: 24px;
	font-weight: 600;
	color: #525456;
	font-style: italic;
`;
const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin-top: 16px;
`;
const Priority = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	padding: 4px 16px;
	background: ${({ bg }) => bg};
`;
const Icon = styled.i`
	font-size: 24px;
	color: ${({ color }) => color};
	margin-right: 8px;
`;
const Label = styled.p`
	color: ${({ color }) => color};
	font-size: 16px;
`;

const Issue = () => {
	const getColor = (priority) => {
		return priority === 'low'
			? '#525456'
			: priority === 'medium'
			? '#F57C00'
			: '#D32F2F';
	};
	const getBG = (priority) => {
		return priority === 'low'
			? '#FFF9C4'
			: priority === 'medium'
			? '#FFF3E0'
			: '#FFEBEE';
	};

	return (
		<Container>
			<Name>Joshua Smith</Name>
			<Description>He was late to class today</Description>
			<Footer>
				<Creator>Allison Monét</Creator>
				<Priority bg={getBG('low')}>
					<Icon color={getColor('low')} className='material-icons'>
						error_outline
					</Icon>
					<Label color={getColor('low')}>Low Priority</Label>
				</Priority>
			</Footer>
		</Container>
	);
};

export default Issue;
