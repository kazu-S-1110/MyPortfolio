import { Grid, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { Skill } from './Skill';

export const Skills = ({ skills }) => {
  // console.log(skills);
  return (
    <Div>
      <Text
        textAlign="center"
        fontSize={{ base: '2em', md: '30px' }}
        fontWeight={{ base: '400', md: '500' }}
      >
        My Skills
        <Text fontSize={{ base: '1em', md: '20px' }}>（Not master）</Text>
      </Text>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(7, 1fr)' }}
        gap={6}
      >
        {skills?.map((skill) => {
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
  width: 100%;
`;
