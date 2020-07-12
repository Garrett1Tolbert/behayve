import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	min-width: 200px;
	max-width: 400px;
	display: inline-block;
	width: auto;
	height: auto;
	border-radius: 8px;
	padding: 16px;
	position: relative;
	z-index: 1;
	border: 1px solid #c8c8c8;
	transition: all 0.3s;
	:hover {
		border: 1px solid #fff;
		box-shadow: 0 3px 5px rgba(200, 200, 200, 0.75);
	}
`;
const Name = styled.div`
	font-size: 20px;
	font-weight: 400;
	color: #777;
	margin-bottom: 16px;
	cursor: pointer;
	:hover {
		text-decoration: underline;
	}
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

const Issue = ({ data: { student, priority, description, creator } }) => {
	const getColor = (priority) => {
		return priority === 'Low'
			? '#424242'
			: priority === 'Medium'
			? '#F57C00'
			: priority === 'High'
			? '#D32F2F'
			: '#1976D2';
	};
	const getBG = (priority) => {
		return priority === 'Low'
			? '#F5F5F5'
			: priority === 'Medium'
			? '#FFF3E0'
			: priority === 'High'
			? '#FFEBEE'
			: '#E3F2FD';
	};

	return (
		<Container>
			<Name>{student}</Name>
			<Description>{description}</Description>
			<Footer>
				<Creator>{creator}</Creator>
				<Priority bg={getBG(priority)}>
					<Icon color={getColor(priority)} className='material-icons'>
						{priority === 'resolved' ? 'check' : 'error_outline'}
					</Icon>
					<Label color={getColor(priority)}>
						{priority === 'Resolved'
							? 'Resolved'
							: `${priority} Priority`}
					</Label>
				</Priority>
			</Footer>
		</Container>
	);
};

export default Issue;
