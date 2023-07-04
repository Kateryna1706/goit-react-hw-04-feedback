import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // handleClick = option => {
  //   this.setState(prevState => {
  //     return {
  //       [option]: prevState[option] + 1,
  //     };
  //   });
  // };

  const handleClick = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  // const countTotalFeedback = () => {
  //   let total = 0;
  //   for (const value of Object.values(this.state)) {
  //     total += value;
  //   }

  //   return total;
  // };

  const totalFeedback = good + neutral + bad;

  // const countPositiveFeedbackPercentage = () => {
  //   const positivePercentage = Math.round(
  //     (this.state.good / this.countTotalFeedback()) * 100
  //   );
  //   return `${positivePercentage}%`;
  // };

  const positiveFeedbackPercentage = `${Math.round(
    (good / totalFeedback) * 100
  )}%`;

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {[good, neutral, bad].some(value => value > 0) ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
