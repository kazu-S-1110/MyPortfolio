import styled from 'styled-components';

export default () => {
  return (
    <Header>
      <Title>My Portfolio</Title>
    </Header>
  );
};

const Header = styled.div`
  width: 100%;
  background-color: blue;
  background-image: linear-gradient(62deg, blue 0%, #6df7e7 60%);
  top: 0;
  text-align: center;
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
