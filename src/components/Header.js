import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Online Nutrition Coaching Service</Title>
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </HeaderContainer>
  );
};

export default Header;
