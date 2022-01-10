import { Text, SimpleGrid, Flex, Box, Link, Button } from '@chakra-ui/react';
import { CardOfOutput } from './CardOfOutput';

export const Outputs = ({ outputs }) => {
  console.log(outputs);
  return (
    <Box borderBottom="3px solid blue" w="100%" mt="5">
      <Flex justify="center" align="center" mb="5">
        <Box bg="#b8faf2" w={{ base: '50vw', md: '30vw' }} borderRadius="xl">
          <Text
            textAlign="center"
            fontSize={{ base: '20px', md: '28px' }}
            fontWeight={{ base: '400', md: '500' }}
          >
            MY WORKS
          </Text>
        </Box>
      </Flex>
      <SimpleGrid
        column={3}
        minChildWidth={{ base: '50vw', md: '30vw' }}
        spacing={10}
      >
        {outputs?.map((output) => {
          return <CardOfOutput output={output} />;
        })}
      </SimpleGrid>
    </Box>
  );
};
