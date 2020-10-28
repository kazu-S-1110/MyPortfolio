import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

export default () => {
  return (
    <>
      <Con>
        <Typewriter
          options={{
          strings: ['Hello World', "Com'on World"],
          autoStart: true,
          loop: true,
          delay: 100
          }}
        />
      </Con>
    </>
  )
}

const Con = styled.div`
  background-image:url("/pc.jpg");
  background-color:rgba(255,255,255,0.6);
  background-blend-mode:lighten;
  width:100%;
  height:400px;
  justify-content: center;
  align-items: center;
  display:flex;
  font-size:50px;
  color:#00eeff;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  outline:red solid 2px;
  margin-top:60px;  
  `
