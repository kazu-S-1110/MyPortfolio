import { Grid, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { Skill } from './Skill';

export const Skills = ({ skills }) => {
  console.log(skills);
  return (
    <Div>
      <h1>
        My Skills<span>（Not master）</span>
      </h1>
      <Grid templateColumns="repeat(7, 1fr)" gap={6}>
        {skills.map((skill) => {
          return (
            <Flex direction="column" alignItems="center">
              <Skill skill={skill} key={skill.sys.id} />
            </Flex>
          );
        })}
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
