import { useState } from 'react';
import { Feedback } from './Feedback';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import { Box } from './Box';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateStatistic = evt => {
    const stateToChange = evt.target.name;
    switch (stateToChange) {
      case 'good':
        setGood(prev => prev + 1);
        return;

      case 'neutral':
        setNeutral(prev => prev + 1);
        return;

      case 'bad':
        setBad(prev => prev + 1);
        return;

      default:
        console.log('You tap some wrong button');
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const optionsNames = ['good', 'neutral', 'bad'];

  return (
    <Box px="5">
      <Section title="Please leave feedback">
        <Feedback
          options={optionsNames}
          updateStatistic={updateStatistic}
        ></Feedback>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            names={optionsNames}
            values={[good, neutral, bad]}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Box>
  );
};
