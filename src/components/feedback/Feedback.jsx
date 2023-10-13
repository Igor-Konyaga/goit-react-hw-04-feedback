import { useState } from 'react';
import { Statistics } from 'components/feedback/statistics/Statistics';
import { FeedbackOptions } from 'components/feedback/feedback-options/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const currentId = e.target.id;

    switch (currentId) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const calcPersent = (100 / (good + neutral + bad)) * good;
    const resultPercent = Math.trunc(calcPersent) || 0;
    return resultPercent;
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        onLeaveFeedback={handleClick}
        options={['good', 'neutral', 'bad']}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </Section>
  );
};
