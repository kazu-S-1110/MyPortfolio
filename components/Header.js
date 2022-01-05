import { Box, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';
import { Icon } from './Icon';

export const Header = () => {
  return (
    <Head>
      <Title>My Portfolio</Title>
      <Box h="3vh">
        <Icon
          src="./github-icon-1.svg"
          link="https://github.com/kazu-S-1110/"
        />
      </Box>
    </Head>
  );
};

const Head = styled.div`
  width: 100%;
  background-color: blue;
  background-image: linear-gradient(62deg, blue 0%, #6df7e7 60%);
  top: 0;
  z-index: 5;
  justify-content: space-between;
  position: fixed;
  display: flex;

  flex-direction: row;
  @media screen and (max-width: 690px) {
    height: auto;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  font-family: 'Playfair Display', serif;
  display: inline;
  color: white;
  @media screen and (max-width: 690px) {
    font-size: 30px;
  }
`;
