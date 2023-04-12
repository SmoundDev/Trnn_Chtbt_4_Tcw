import React, { useState } from 'react';

const Feedback = (__feedbackMessage) => {
  const [feedback, setFeedback] = useState(null);

  const handleFeedbackClick = (feedbackValue) => {
    setFeedback(feedbackValue);
    sendFeedback(feedbackValue);
  };

  const sendFeedback = (feedbackValue) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: feedbackValue })
    };

    fetch('/api/feedback', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div>
        <div>¿Esta respuesta fue útil?
        <button onClick={() => handleFeedbackClick('positive')}><span role="img" aria-label="thumbs-up">👍</span></button>
        <button onClick={() => handleFeedbackClick('negative')}><span role="img" aria-label="thumbs-down">👎</span></button>
        </div>
      </div>
      {feedback && (
        <div>
          Gracias por tu respuesta: {feedback}
        </div>
      )}
    </div>
  );
};

export default Feedback;