import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

export const Top = () => {
  return (
    <>
      <Con>
        <Typewriter
          options={{
            strings: ['Hello World', "C'mon World"],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </Con>
    </>
  );
};

const Con = styled.div`
  margin-top: 50px;
  background-image: url('/pc.jpg');
  background-color: rgba(255, 255, 255, 0.6);
  background-blend-mode: lighten;
  background-size: cover;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 50px;
  color: #00eeff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  /* margin-top: auto; */
  text-shadow: 0.02em 0.02em 0.02em rgba(0, 0, 0, 1);
  @media screen and (max-width: 760px) {
    height: 250px;
    margin-top: 30px;
  }
`;
