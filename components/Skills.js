import { Grid, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { Skill } from './Skill';

export const Skills = ({ skills }) => {
  // console.log(skills);
  return (
    <Div>
      <h1>
        My Skills<span>（Not master）</span>
      </h1>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(7, 1fr)' }}
        gap={6}
      >
        {skills.map((skill) => {
          return (
            <Flex direction="column" alignItems="center" key={skill.sys.id}>
              <Skill skill={skill} />
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
