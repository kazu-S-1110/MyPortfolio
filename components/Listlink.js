import { Fragment } from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <>
      <Div>
        <h1>Links</h1>
        <A href="https://github.com/kazu-S-1110">My-github-repo</A>
        <A href="https://chat-demo-kazu0.web.app/">Chat-app</A>
        <A href="https://react-hooks-practice.vercel.app/">Todo-app</A>
      </Div>
    </>
  );
};

const Div = styled.div`
  color: blue;
  margin-top: 60px;
  outline: blue solid 3px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #efeef4;

  h1 {
    color: black;
  }
`;

const A = styled.a`
  font-size: 30px;
  margin-top: 20px;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
`;
