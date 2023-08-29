import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <ul className={css.container}>
      {option.map(option => (
        <li className={css.btn_container} key={option}>
          <button
            className={css.btn_option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
