import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      {options.map((option, index) => (
        <button
          className={css.buttonsItem}
          onClick={() => onLeaveFeedback(option)}
          key={index}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
