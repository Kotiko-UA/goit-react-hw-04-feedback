import { Component } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, positivePercentage: 0 };
  onClickFeedback = ({ target }) => {
    this.setState(prevState => ({ [target.name]: prevState[target.name] + 1 }));
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    this.setState(prevState => ({ total: prevState.total + 1 }));
    this.countPositiveFeedbackPercentage();
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good / prevState.total) * 100),
    }));
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const options = [
      { id: nanoid(), name: 'good' },
      { id: nanoid(), name: 'neutral' },
      { id: nanoid(), name: 'bad' },
    ];

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onClickFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}
