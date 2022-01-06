import { Box, Image, Link, Spacer } from '@chakra-ui/react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Head>
      <Title>My Portfolio</Title>
      <Box
        h={{ base: '5vh', md: '6vh' }}
        w="14vw"
        alignSelf="center"
        alignItems="center"
        display="flex"
        justifyContent="center"
        justifyItems="center"
        min-height="17px"
        max-height="27px"
      >
        <Link href="https://github.com/kazu-S-1110/" isExternal>
          <Image src="./github-icon-1.svg" boxSize="40px" m="2px" />
        </Link>
        <Link href="https://twitter.com/posekaz61110" isExternal>
          <Image src="./Logo blue.svg" boxSize="40px" m="2px" />
        </Link>
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
