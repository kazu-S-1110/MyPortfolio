import {
  Box,
  Button,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';

export const CardOfOutput = ({ output }) => {
  return (
    <>
      <Box bg="#AED6FB" borderRadius="xl" minHeight="70px" mx="4">
        <Popover>
          <PopoverTrigger>
            <Text
              textAlign="center"
              cursor="pointer"
              fontSize={{ base: '20px', md: '24px' }}
              _hover={{ opacity: '0.5', bg: '#ddedfc' }}
            >
              {output.fields.name}
            </Text>
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
