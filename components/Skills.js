import { Grid, Flex, Text, Box } from '@chakra-ui/react';
import { Skill } from './Skill';

export const Skills = ({ skills }) => {
  // console.log(skills);

  return (
    <Box borderBottom="3px solid blue" p="5">
      <Flex justify="center" align="center" mb="5">
        <Box bg="#b8faf2" w="40vw" borderRadius="xl">
          <Text
            textAlign="center"
            fontSize={{ base: '20px', md: '30px' }}
            fontWeight={{ base: '400', md: '500' }}
          >
            MY SKILLS
            <Text fontSize={{ base: '14px', md: '20px' }}>（Not master）</Text>
          </Text>
        </Box>
      </Flex>
      <Grid
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
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
    </Box>
  );
};
