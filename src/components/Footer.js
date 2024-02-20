import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLogo = styled.img`
  width: 100px;
  height: auto;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
  &:hover {
    color: #ffcc00;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Coaches</FooterLink>
          <FooterLink href="#">Meal Planning</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
