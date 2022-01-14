import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  return (
    <Flex flexDirection="column" justify="center" align="center" my="6">
      <Text>This site was created by Nextjs, Chakra UI, and Contentful.</Text>
    </Flex>
  );
};
