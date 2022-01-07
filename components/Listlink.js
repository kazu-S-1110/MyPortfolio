import { Fragment } from 'react';
import styled from 'styled-components';

export const ListLink = () => {
  return (
    <>
      <Div>
        <h1>Links</h1>
        <A href="https://react-hooks-practice.vercel.app/">Todo-app</A>
        {/* <object
          type="image/svg+xml"
          data="https://gh-card.dev/repos/kazu-S-1110/react-farm_211217.svg?link_target=_blank"
        ></object> */}
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
