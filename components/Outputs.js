import { Text, SimpleGrid, Flex, Box, Link, Button } from '@chakra-ui/react';
import { CardOfOutput } from './CardOfOutput';

export const Outputs = ({ outputs }) => {
  return (
    <>
      <Box borderBottom="3px solid blue" w="100%" mt="5">
        <Flex justify="center" align="center" flexDirection="column" mb="5">
          <Box bg="#b8faf2" w={{ base: '50vw', md: '30vw' }} borderRadius="xl">
            <Text
              textAlign="center"
              fontSize={{ base: '23px', md: '28px' }}
              fontWeight={{ base: '400', md: '500' }}
            >
              MY WORKS
            </Text>
          </Box>
          <Text
            textAlign="center"
            color="gray.500"
            fontSize={{ base: '13px', md: '15px' }}
          >
            タイトルをクリックして詳細を確認できます
          </Text>
        </Flex>
        <SimpleGrid
          minChildWidth={{ base: '50vw', md: '30vw' }}
          spacing={10}
          mb="4"
        >
          {outputs?.map((output) => {
            return <CardOfOutput key={output.sys.id} output={output} />;
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};
