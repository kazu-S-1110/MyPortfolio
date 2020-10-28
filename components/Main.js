import styled from "styled-components"

export default () => {
  return (
    <>
      <h2> I love React + Nextjs</h2>
      <Img src="/career.png"></Img>
    </>
  )
}

const Img = styled.img`
  width:300px;
  height:auto;
  background: blue;
  font-family:'Times New Roman', Times, serif;
  

`
