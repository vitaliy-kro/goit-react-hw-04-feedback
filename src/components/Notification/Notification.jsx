import { Box } from 'components/Box';

export const Notification = ({ message }) => {
  return (
    <Box fontFamily="roboto" fontSize="s" color="black" as="p">
      {message}
    </Box>
  );
};
