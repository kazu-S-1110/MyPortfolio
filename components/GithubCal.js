import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const ReactGitHubCalendar = dynamic(() => import('react-ts-github-calendar'), {
  ssr: false,
});

export const GithubCal = () => {
  const [isLargerThan690] = useMediaQuery('(min-width:690px)');
  return (
    <Flex
      p="4"
      mx="4"
      flexDirection="column"
      justify="center"
      align="center"
      borderBottom="3px solid blue"
    >
      <Box
        bg="#b8faf2"
        w={{ base: '50vw', md: '30vw' }}
        borderRadius="xl"
        mb="3"
        p="2"
      >
        <Text
          textAlign="center"
          fontSize={{ base: '23px', md: '28px' }}
          fontWeight={{ base: '400', md: '500' }}
        >
          GitHub Contributions
        </Text>
      </Box>
      {isLargerThan690 ? (
        <ReactGitHubCalendar userName="kazu-s-1110" />
      ) : (
        <ReactGitHubCalendar userName="kazu-s-1110" responsive />
      )}
    </Flex>
  );
};
