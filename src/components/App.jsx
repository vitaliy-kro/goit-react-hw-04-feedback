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
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   updateStatistic = evt => {
//     const stateToChange = evt.target.name;

//     this.setState(prevState => {
//       return { [stateToChange]: prevState[stateToChange] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((prev, el) => prev + el, 0);
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };
//   render() {
//     const statisticToMarkUp = this.countTotalFeedback();

//     return (
//       <Box px="5">
//         <Section title="Please leave feedback">
//           <Feedback
//             options={this.state}
//             updateStatistic={this.updateStatistic}
//           ></Feedback>
//         </Section>
//         <Section title="Statistics">
//           {statisticToMarkUp ? (
//             <Statistics
//               values={this.state}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }
