import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	padding: 16px;
	background: #fff;
	border-radius: 0 0 12px 12px;
	box-shadow: 0 4px 10px rgba(200, 200, 200, 0.5);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Brand = styled.p`
	margin: 0;
	font-size: 48px;
	color: blue;
	font-weight: 600;
`;

const CTA = styled.div`
	padding: 12px;
	border-radius: 6px;
	background: blue;
	display: inline-block;
	color: #fff;
	cursor: pointer;
`;

const Header = () => {
	return (
		<Container>
			<Brand>Behayve</Brand>
			<CTA>Add New Issue</CTA>
		</Container>
	);
};

export default Header;
