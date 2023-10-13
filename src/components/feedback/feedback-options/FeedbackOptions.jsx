import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={`${css.list} ${css.feedback0ption}`}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.feedback0ptionButton}
              id={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
