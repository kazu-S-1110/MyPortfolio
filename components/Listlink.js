import { Text, SimpleGrid, Flex, Box, Link, Button } from '@chakra-ui/react';

export const ListLink = ({ outputs }) => {
  console.log(outputs);
  return (
    <Box borderBottom="3px solid blue" w="100%" mt="5">
      <Flex justify="center" align="center" mb="5">
        <Box bg="#6df7e7" w="40vw" borderRadius="xl">
          <Text
            textAlign="center"
            fontSize={{ base: '20px', md: '30px' }}
            fontWeight={{ base: '400', md: '500' }}
          >
            実際に作ったもの
          </Text>
        </Box>
      </Flex>
      <SimpleGrid column={3} minChildWidth="30vw" spacing={10}>
        {outputs?.map((output) => {
          return (
            <Box bg="aquamarine" borderRadius="xl">
              <Text textAlign="center">{output.fields.name}</Text>
              <Link href={output.fields.url}>
                <Button>Url</Button>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};
