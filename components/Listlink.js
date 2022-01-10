import { Text, SimpleGrid, Flex, Box } from '@chakra-ui/react';

export const ListLink = ({ outputs }) => {
  return (
    <SimpleGrid borderBottom="3px solid blue" w="100%" mt="5">
      <Flex justify="center" align="center">
        <Box bg="#6df7e7" w="40vw" borderRadius="3xl">
          <Text
            textAlign="center"
            fontSize={{ base: '2em', md: '30px' }}
            fontWeight={{ base: '400', md: '500' }}
          >
            実際に作ったもの
          </Text>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};
