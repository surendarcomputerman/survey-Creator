import React, { useState } from 'react';

function Creator({ questions, setQuestions, nextStep }) {
  const [questionText, setQuestionText] = useState('');
  const [type, setType] = useState('text');
  const [options, setOptions] = useState('');

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      text: questionText,
      type,
      options: type === 'mcq' ? options.split(',').map(opt => opt.trim()) : []
    };
    setQuestions([...questions, newQuestion]);
    setQuestionText('');
    setOptions('');
    setType('text');
  };

  return (
    <div className="card">
      <h2>Create Questions</h2>
      <input
        placeholder="Enter question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="text">Text</option>
        <option value="mcq">Multiple Choice</option>
      </select>
      {type === 'mcq' && (
        <input
          placeholder="Options (comma separated)"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        />
      )}
      <button onClick={addQuestion}>Add Question</button>
      <button onClick={nextStep} disabled={questions.length === 0}>
        Start Survey
      </button>
    </div>
  );
}

export default Creator;
