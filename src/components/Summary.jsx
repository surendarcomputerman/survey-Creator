import React from 'react';

function Summary({ questions, answers }) {
  return (
    <div className="card">
      <h2>Summary Report</h2>
      <ul>
        {questions.map((q) => {
          const answer = answers.find(a => a.id === q.id)?.answer || 'No Answer';
          return (
            <li key={q.id}>
              <strong>{q.text}</strong>
              <p>Answer: {answer}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Summary;
