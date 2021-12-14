import { Image, Grid } from '@chakra-ui/react';
import styled from 'styled-components';

export const Skills = () => {
  return (
    <Div>
      <h1>
        My Skills<span>（Not master）</span>
      </h1>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
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

const Ul = styled.div`
  font-size: 25px;
  height: auto;
  display: flex;
  list-style: none;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Li = styled.div`
  text-align: center;
  width: 100px;
  height: 130px;
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: opacity 0.3s;
  :hover {
    opacity: 0.5;
    background-color: blue;
  }
`;

const Img = styled.img`
  width: 90px;
  height: 70px;
`;
