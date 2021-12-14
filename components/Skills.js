import { Button, Image } from '@chakra-ui/react';
import styled from 'styled-components';

export default () => {
  return (
    <Div>
      <h1>
        My Skills<span>（Not master）</span>
      </h1>
      <Ul>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="./react.svg"
          alt="react"
        />
        <Li>
          React Hooks <Img src="/hooks.svg" />
        </Li>
        <Li>
          React Redux <Img src="/redux.svg" />
        </Li>
        <Li>
          Next.js <Img src="/nextjs-3.svg" />
        </Li>
        <Li>
          JavaScript <Img src="/javascript.svg" />
        </Li>
        <Li>
          Firebase <Img src="/firebase-1.svg" />
        </Li>
        <Li>
          AWS <Img src="/aws-logo.svg" />
        </Li>
        <Li>
          Styled components <Img src="/styled.png" />
        </Li>
        <Li>
          TypeScript <Img src="/typescript.svg" />
        </Li>
        <Li>
          Python <Img src="/python-4.svg" />
        </Li>
        <Button>button</Button>
      </Ul>
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
