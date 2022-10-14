import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { StatisticValue } from './Statistics.styled';
import { CapitalizeFirstLetter } from 'components/Helpers/Helpers';
export const Statistics = ({ values, total, positivePercentage }) => {
  const valuesToMarkup = Object.entries(values);
  return (
    <Box>
      {valuesToMarkup.map((e, index) => (
        <StatisticValue key={index}>
          {CapitalizeFirstLetter(e[0])}: {e[1]}
        </StatisticValue>
      ))}
      <StatisticValue> Total: {total}</StatisticValue>
      <StatisticValue>Positive feedback: {positivePercentage}%</StatisticValue>
    </Box>
  );
};

Statistics.propTypes = {
  values: PropTypes.objectOf(PropTypes.number.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
