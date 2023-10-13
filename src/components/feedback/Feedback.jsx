import { Component } from 'react';
import { Statistics } from 'components/feedback/statistics/Statistics';
import { FeedbackOptions } from 'components/feedback/feedback-options/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleClick = e => {
    const currentId = e.target.id;

    this.setState(prevState => {
      return {
        [currentId]: prevState[currentId] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const calcPersent =
      (100 / (this.state.good + this.state.neutral + this.state.bad)) *
      this.state.good;
    const resultPercent = Math.trunc(calcPersent) || 0;
    return resultPercent;
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={this.handleClick}
          options={Object.keys(this.state)}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    );
  }
}
