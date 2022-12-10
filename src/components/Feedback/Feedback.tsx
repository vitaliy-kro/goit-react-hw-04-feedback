import { Box } from 'components/Box';
import React from 'react';
import { FeedbackButton } from './Feedback.styled';
import { CapitalizeFirstLetter } from 'components/Helpers/Helpers';
import { IProps } from './FeedbackInterface';

export const Feedback: React.FC<IProps> = ({ options, updateStatistic }) => {
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
