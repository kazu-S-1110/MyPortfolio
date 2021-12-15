import { Image, Grid } from '@chakra-ui/react';
import styled from 'styled-components';
import { fetchEntries } from '../lib/contentful';

export const Skills = () => {
  return (
    <Div>
      <h1>
        My Skills<span>（Not master）</span>
      </h1>
      <Grid templateColumns="repeat(7, 1fr)" gap={6}>
        <Image
          justifySelf="center"
          boxSize="150px"
          src="./react.svg"
          alt="react"
        />
        <Image
          justifySelf="center"
          boxSize="150px"
          src="./aws-logo.svg"
          alt="react"
        />
        <Image
          justifySelf="center"
          boxSize="150px"
          src="./javascript.svg"
          alt="react"
        />
        <Image
          justifySelf="center"
          boxSize="150px"
          src="./typescript.svg"
          alt="react"
        />
        <Image
          justifySelf="center"
          boxSize="150px"
          src="./nextjs-3.svg"
          alt="react"
        />
        <Image
          justifySelf="center"
          boxSize="150px"
          src="./redux.svg"
          alt="react"
        />
      </Grid>
    </Div>
  );
};

const Div = styled.div`
  outline: blue solid 3px;
  width: 100%;
  h1 {
    text-align: center;
    span {
      font-size: 10px;
    }
  }
`;
