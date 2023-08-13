import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

export const Header: React.FC = () => {
  return <HeaderWrapper>Wrap Event</HeaderWrapper>;
};

export default Header;
