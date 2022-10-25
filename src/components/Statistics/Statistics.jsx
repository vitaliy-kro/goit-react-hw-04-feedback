import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatisticValue } from './Statistics.styled';
import { CapitalizeFirstLetter } from 'components/Helpers/Helpers';
export const Statistics = ({ names, total, values, positivePercentage }) => {
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

Statistics.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired),
  values: PropTypes.arrayOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
