import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { FeedbackButton } from './Feedback.styled';
import { CapitalizeFirstLetter } from 'components/Helpers/Helpers';
export const Feedback = ({ options, updateStatistic }) => {
  return (
    <Box>
      {options.map((e, index) => (
        <FeedbackButton key={index} name={e} onClick={updateStatistic}>
          {CapitalizeFirstLetter(e)}
        </FeedbackButton>
      ))}
    </Box>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  updateStatistic: PropTypes.func.isRequired,
};
