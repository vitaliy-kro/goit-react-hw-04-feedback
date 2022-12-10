import { useState } from 'react';

import { Feedback } from './Feedback';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export const App: React.FC = () => {
  const [good, setGood] = useState<number>(0);
  const [neutral, setNeutral] = useState<number>(0);
  const [bad, setBad] = useState<number>(0);

  const updateStatistic = (evt: { target: { name: any } }) => {
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
    <>
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
    </>
  );
};
