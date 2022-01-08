import { Box, Image, Link, Heading } from '@chakra-ui/react';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Head>
      <Heading
        fontSize={{ base: '2xl', md: '5xl' }}
        color="white"
        alignSelf="center"
        fontFamily="serif"
        ml="5"
      >
        My Portfolio
      </Heading>
      <Box alignSelf="center" display="flex" min-height="17px">
        <Link href="https://github.com/kazu-S-1110/" isExternal mr={'3'}>
          <Image src="./github-icon-1.svg" boxSize="40px" m="2px" />
        </Link>
        <Link href="https://twitter.com/posekaz61110" isExternal mr={'2'}>
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
  /* @media screen and (max-width: 690px) {
    height: auto;
  } */
`;
