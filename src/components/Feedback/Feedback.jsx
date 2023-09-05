import { Button, Wrapper } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option.id}
          name={option.name}
          onClick={option.method}
          type="button"
        >
          {option.name}
        </Button>
      ))}
    </Wrapper>
  );
};
