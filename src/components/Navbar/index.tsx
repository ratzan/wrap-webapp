import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #444;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

export const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Link href="/">Home</Link>
      <Link href="/store">Store</Link>
      <Link href="/contact">Contact</Link>
    </NavbarWrapper>
  );
};

export default Navbar;
