import '../../app/globals.css';
import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AppContainer = styled.div`
  background: linear-gradient(to right, #8a2be2, #9400d3);
  font-family: 'Montserrat', sans-serif;
  color: #ff8c00;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </AppContainer>
  );
};

export default Layout;
