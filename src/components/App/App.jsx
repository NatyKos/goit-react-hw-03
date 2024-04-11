import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedFeedback = localStorage.getItem('clickCount');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    localStorage.setItem('clickCount', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = feedbackType => {
    const updateClicks = { ...clicks };
    updateClicks[feedbackType] += 1;
    setClicks(updateClicks);
  };
  const { good, neutral, bad } = clicks;
  const totalFeedback = good + neutral + bad;
  const reset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} total={totalFeedback} reset={reset} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={clicks}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
}
