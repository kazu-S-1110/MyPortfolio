import {
  Box,
  Button,
  Collapse,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

export const CardOfOutput = ({ output }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box bg="#AED6FB" borderRadius="xl">
        <Text textAlign="center" onClick={onToggle}>
          {output.fields.name}
        </Text>
        <Link href={output.fields.url}>
          <Button>Url</Button>
        </Link>
      </Box>
      <Collapse in={isOpen}>{output.fields.description}</Collapse>
    </>
  );
};
