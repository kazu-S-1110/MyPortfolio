import {
  Box,
  Button,
  Collapse,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export const CardOfOutput = ({ output }) => {
  return (
    <>
      <Box bg="#AED6FB" borderRadius="xl">
        <Popover>
          <PopoverTrigger>
            <Text
              textAlign="center"
              cursor="pointer"
              fontSize={{ base: '20px', md: '24px' }}
            >
              {output.fields.name}
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
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
