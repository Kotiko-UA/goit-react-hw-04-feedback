import { Notification } from 'components/Notification/Notification';
import { Wrapper } from './Statistics.styled';

export const Statistics = p => {
  return (
    <div>
      <h2>Statistics</h2>
      {p.total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Wrapper>
          <span>Good: {p.good}</span>
          <span>Neutral: {p.neutral}</span>
          <span>Bad: {p.bad}</span>
          <span>Total: {p.total}</span>
          <span>Positive feedback: {p.positivePercentage}%</span>
        </Wrapper>
      )}
    </div>
  );
};
