import styled from "styled-components"

export default () => {
  return (
    <Div>
      <h1>My Skills</h1>
        <Ul>
          <Li>React <Img src="/react.svg"/></Li>
          <Li>React Hooks <Img src="/hooks.svg"/></Li>
          <Li>React Redux <Img src="/redux.svg"/></Li>
          <Li>Nextjs <Img src="/nextjs-3.svg"/></Li>
          <Li>JavaScript <Img src="/javascript.svg"/></Li>
          <Li>Firebase <Img src="/firebase-1.svg"/></Li>
          {/* <Li>AWS <Img src="/aws-logo.svg"/></Li> */}
          <Li>Styled components <Img src="/styled.png"/></Li>
          {/* <Li>TypeScript <Img src="/typescript.svg"/></Li> */}
          {/* <Li>Python <Img src="/python-4.svg"/></Li> */}
      </Ul>      
    </Div>
  )
}

const Div = styled.div`
  outline:blue solid 3px;
  width:100%;
  h1 {
  text-align:center;

}
`


const Ul = styled.div`
  font-size:25px;
  height:auto;
  display:flex;
  list-style:none;
  flex-direction: row;
  flex-wrap: wrap;         /*折り返し有り・複数行*/
`

const Li = styled.div`
  text-align:center;
  width:100px;
  height:130px;
  display:flex;
  margin:20px;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;


`

const Img = styled.img`
  width:90px;
  height:70px;

`

