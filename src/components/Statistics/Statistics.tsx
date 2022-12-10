import React from 'react';
import { Box } from 'components/Box';
import { StatisticValue } from './Statistics.styled';
import { CapitalizeFirstLetter } from 'components/Helpers/Helpers';

interface IProps {
  names: string[];
  total: number;
  values: number[];
  positivePercentage: number;
}

export const Statistics: React.FC<IProps> = ({
  names,
  total,
  values,
  positivePercentage,
}) => {
  return (
    <Box>
      {names.map((e, index) => (
        <StatisticValue key={index}>
          {CapitalizeFirstLetter(e)}:{values[index]}
        </StatisticValue>
      ))}
      <StatisticValue> Total: {total}</StatisticValue>
      <StatisticValue>Positive feedback: {positivePercentage}%</StatisticValue>
    </Box>
  );
};
