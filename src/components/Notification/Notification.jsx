import { Box } from 'components/Box';
import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
  return (
    <Box fontFamily="roboto" fontSize="s" color="black" as="p">
      {message}
    </Box>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
