import { Button, Wrapper } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option.id}
          name={option.name}
          onClick={onLeaveFeedback}
          type="button"
        >
          {option.name}
        </Button>
      ))}
    </Wrapper>
  );
};
