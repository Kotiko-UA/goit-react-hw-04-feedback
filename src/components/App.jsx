import { useState } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { nanoid } from 'nanoid';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  const onGood = () => {
    setGood(prevState => prevState + 1);
  };
  const onNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const onBad = () => {
    setBad(prevState => prevState + 1);
  };

  const options = [
    { id: nanoid(), name: 'good', method: onGood },
    { id: nanoid(), name: 'neutral', method: onNeutral },
    { id: nanoid(), name: 'bad', method: onBad },
  ];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </Section>
  );
};
