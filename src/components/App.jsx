import { Component } from 'react';
import { Feedback } from './Feedback';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';
import { Box } from './Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatistic = evt => {
    const stateToChange = evt.target.name;

    this.setState(prevState => {
      return { [stateToChange]: prevState[stateToChange] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, el) => prev + el, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const statisticToMarkUp = this.countTotalFeedback();

    return (
      <Box px="5">
        <Section title="Please leave feedback">
          <Feedback
            options={this.state}
            updateStatistic={this.updateStatistic}
          ></Feedback>
        </Section>
        <Section title="Statistics">
          {statisticToMarkUp ? (
            <Statistics
              values={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Box>
    );
  }
}
