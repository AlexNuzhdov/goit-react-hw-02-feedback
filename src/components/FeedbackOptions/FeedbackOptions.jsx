import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled.jsx';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div>
      {options.map(option => (
        <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </div>
  );
  
  FeedbackOptions.propTypes = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };