import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>© 2023 Wrap Event. All rights reserved.</FooterWrapper>
  );
};

export default Footer;
