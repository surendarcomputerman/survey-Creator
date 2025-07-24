import React, { useState } from 'react';

function Survey({ questions, setAnswers, nextStep }) {
  const [userAnswers, setUserAnswers] = useState({});

  const handleChange = (id, value) => {
    setUserAnswers({ ...userAnswers, [id]: value });
  };

  const handleSubmit = () => {
    const response = questions.map(q => ({
      id: q.id,
      answer: userAnswers[q.id] || ''
    }));
    setAnswers(response);
    nextStep();
  };

  return (
    <div className="card">
      <h2>Take the Survey</h2>
      {questions.map((q) => (
        <div key={q.id} className="question">
          <p>{q.text}</p>
          {q.type === 'text' ? (
            <input
              type="text"
              onChange={(e) => handleChange(q.id, e.target.value)}
            />
          ) : (
            q.options.map((opt, idx) => (
              <label key={idx}>
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={opt}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                />
                {opt}
              </label>
            ))
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Survey</button>
    </div>
  );
}

export default Survey;
