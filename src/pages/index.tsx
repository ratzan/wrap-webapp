import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const StyledBody = styled.div`
  background-size: 200% 200%;
  background-image: linear-gradient(45deg, #8a2be2, #9400d3, #8a2be2);
  animation: ${gradientAnimation} 10s ease infinite;
  font-family: 'Montserrat', sans-serif;
  color: #ff8c00;
  height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Hero = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CTA = styled.button`
  background-color: #ff8c00;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7f00;
  }
`;

function HomePage() {
  return (
    <StyledBody>
      <Hero>
        <h1>Welcome to Wrap Web App</h1>
        <p>This is the home page of your application.</p>
        <Link href="/store" passHref>
          <CTA>Visit our store</CTA>
        </Link>
      </Hero>
    </StyledBody>
  );
}

export default HomePage;
