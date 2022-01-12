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
        display="flex"
        flexDirection="column"
      >
        <Popover>
          <PopoverTrigger>
            <Tooltip label="click to display description">
              <Text
                textAlign="center"
                cursor="pointer"
                fontSize={{ base: '14px', md: '20px' }}
                borderRadius={'xl'}
                _hover={{ opacity: '0.5', bg: '#ddedfc' }}
              >
                {output.fields.name}
              </Text>
            </Tooltip>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>{output.fields.description}</PopoverBody>
          </PopoverContent>
          {output.fields.url && (
            <Link href={output.fields.url} isExternal>
              <Button cursor="pointer">Url</Button>
            </Link>
          )}
        </Popover>
      </Box>
    </>
  );
};
