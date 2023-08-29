import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const optionKeys = Object.keys(feedbackCounts);

  const { good, neutral, bad } = feedbackCounts;

  const heandleLeaveFeedback = option => {
    setFeedbackCounts(prevFeedbackCounts => ({
      ...prevFeedbackCounts,
      [option]: prevFeedbackCounts[option] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = total => {
    const percentage = Math.round((good * 100) / total);
    return percentage;
  };

  const total = good + neutral + bad;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          option={optionKeys}
          onLeaveFeedback={heandleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
