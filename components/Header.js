import styled from "styled-components"


export default () => {
  return (
    <Header>
      <Title>My Portfolio</Title>
    </Header>
  )
}

const Header = styled.div`
  width: 100%;
  position:fixed;
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  top:0;
  height:60px;
`
const Title = styled.h1`
  font-size:50px;
  font-family: 'Playfair Display', serif;
  /* outline:black solid 3px; */
  display:inline;
  color:white;
  `

