import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { MainContext } from '../../context/MainContext';

const Container = styled.div`
	width: 300px;
	height: 100vh;
	background: #fff;
	box-shadow: 0 3px 5px #525456;
	border-radius: 8px 0 0 8px;
	padding: 24px;
	position: absolute;
	top: 0;
	z-index: 10;
	right: 0;
`;

const Title = styled.div`
	font-size: 32px;
	font-weight: 700;
	color: #525456;
	margin-bottom: 16px;
`;

const InputContainer = styled.div`
	margin-top: 12px;
`;
const Label = styled.div`
	margin-top: 12px;
	font-size: 16px;
	font-weight: 700;
	color: #777;
	margin-bottom: 8px;
`;

const Input = styled.input`
	font-size: 18px;
	border: none;
	border-bottom: 1px solid blue;
`;

const CTA = styled.div`
	padding: 12px;
	background: blue;
	color: #fff;
	font-size: 16px;
	fon-weight: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: calc(100% - 48px);
	bottom: 25px;
	border-radius: 6px;
	cursor: pointer;
`;

const Dropdown = styled.select`
	margin-top: 12 px;
	padding: 12 px;
	width: 200px;
`;

const AddIssue = () => {
	const [name, setName] = useState('');
	const [priority, setPriority] = useState('');
	const [description, setDescription] = useState('');
	const {addIssue} = useContext(MainContext);

	const handleClick = () => {
		addIssue(
			name,
			priority,
			description,
			`300${Math.round(Math.random() * 10000)}`
		)
	};
	return (
		<Container>
			<Title>New Issue</Title>
			<InputContainer>
				<Label>Student's Name</Label>
				<Input
					placeholder={`Student's Name`}
					onChange={(e) => setName(e.target.value)}
				/>
			</InputContainer>
			<InputContainer>
				<Dropdown onChange={(e) => setPriority(e.target.value)}>	
					<option>Select priority:</option>
					<option value="High">High</option>	
					<option value="Medium">Medium</option>
					<option value="Low">Low</option>
				</Dropdown>
			</InputContainer>
			<InputContainer>
				<Label>Description</Label>
				<Input
					placeholder={`Description`}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</InputContainer>	
			<CTA onClick={handleClick}>Add Issue</CTA>
		</Container>
	);
};

export default AddIssue;
