import { Box, useMediaQuery } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const ReactGitHubCalendar = dynamic(() => import('react-ts-github-calendar'), {
  ssr: false,
});

export const GithubCal = () => {
  const [isLargerThan640] = useMediaQuery('(min-width:640px)');
  return (
    <Box m="4">
      {isLargerThan640 ? (
        <ReactGitHubCalendar userName="kazu-s-1110" />
      ) : (
        <ReactGitHubCalendar userName="kazu-s-1110" responsive />
      )}
    </Box>
  );
};
