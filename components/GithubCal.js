import { Box, useMediaQuery } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const ReactGitHubCalendar = dynamic(() => import('react-ts-github-calendar'), {
  ssr: false,
});

export const GithubCal = () => {
  const [isLargerThan690] = useMediaQuery('(min-width:690px)');
  return (
    <Box p="4" mx="4">
      {isLargerThan690 ? (
        <ReactGitHubCalendar userName="kazu-s-1110" />
      ) : (
        <ReactGitHubCalendar userName="kazu-s-1110" responsive />
      )}
    </Box>
  );
};
