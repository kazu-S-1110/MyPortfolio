import {
  Box,
  Button,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Image,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export const CardOfOutput = ({ output }) => {
  // const imageName = output.fields.image.fields.file.title;
  return (
    <>
      <Box
        bg="#AED6FB"
        borderRadius="xl"
        minHeight="70px"
        boxShadow={'xl'}
        justifyContent="center"
        display="flex"
        flexDir="column"
      >
        <Popover>
          <PopoverTrigger>
            <Text
              textAlign="center"
              cursor="pointer"
              fontSize={{ base: '18px', md: '22px' }}
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
          templateColumns="repeat(1, 1fr)"
          mb="4"
          mx={{ base: '1', md: '4' }}
          gap="5"
          placeItems="center"
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
          <GridItem>
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
          <GridItem>
            <Link href={output.fields.refUrl} isExternal>
              <Button
                colorScheme="linkedin"
                justifySelf="center"
                cursor="pointer"
              >
                参考にした資料
              </Button>
            </Link>
          </GridItem>
          {output.fields.image && (
            <GridItem>
              <Image
                src={`http:${output.fields.image.fields.file.url}`}
                alt={output.fields.image.fields.file.title}
                style={{ filter: 'blur(0.9px)' }}
                boxSize={{ base: '180px', md: '240px' }}
              />
            </GridItem>
          )}
        </Grid>
      </Box>
    </>
  );
};
