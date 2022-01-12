import {
  Box,
  Button,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export const CardOfOutput = ({ output }) => {
  return (
    <>
      <Box
        bg="#AED6FB"
        borderRadius="xl"
        minHeight="70px"
        boxShadow={'xl'}
        mx="4"
        justifyContent="center"
        display="flex"
        flexDir="column"
      >
        <Popover>
          <PopoverTrigger>
            <Text
              textAlign="center"
              cursor="pointer"
              fontSize={{ base: '14px', md: '20px' }}
              borderRadius={'xl'}
              _hover={{ opacity: '0.5', bg: '#ddedfc' }}
              mb="5"
            >
              {output.fields.name}
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>{output.fields.description}</PopoverBody>
          </PopoverContent>
        </Popover>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 1fr)"
          mb="4"
          mx="3"
        >
          {output.fields.url && (
            <GridItem>
              <Link href={output.fields.url} isExternal>
                <Button justifySelf="center" cursor="pointer">
                  Url
                </Button>
              </Link>
            </GridItem>
          )}
          <GridItem colStart="2">
            <Link href={output.fields.repo} isExternal>
              <Button
                colorScheme="facebook"
                justifySelf="center"
                cursor="pointer"
              >
                Repository
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
