import '../../app/globals.css'
import React from "react";
import { Inter } from 'next/font/google'
import {Header} from "@/components/Header/header";
import {Navbar} from "@/components/Navbar/navbar";
import {Footer} from "@/components/Footer/footer";
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

const MainContent = styled.div`
  padding: 20px;
`;

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children })  => {
  return (
      <>
        <Header />
        <Navbar />
        <MainContent>{children}</MainContent>
        <Footer />
      </>
  );
}


