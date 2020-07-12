import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	width: 200px;
	height: 200px;
	box-shadow: 0 3px 5px rgba(200, 200, 200, 0.35);
	border-radius: 8px;
	padding: 8px;
	position: relative;
	z-index: 1;
	border: 1px solid #525456;
`;

const Issue = () => {
	return <Container>hi</Container>;
};

export default Issue;
