import React, { useState } from 'react';
import Creator from './components/Creator';
import Survey from './components/Survey';
import Summary from './components/Summary.jsx';

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [step, setStep] = useState(0); // 0 = Create, 1 = Survey, 2 = Summary

  return (
    <div className="container">
      <h1>Survey Creator App</h1>
      {step === 0 && (
        <Creator
          questions={questions}
          setQuestions={setQuestions}
          nextStep={() => setStep(1)}
        />
      )}
      {step === 1 && (
        <Survey
          questions={questions}
          setAnswers={setAnswers}
          nextStep={() => setStep(2)}
        />
      )}
      {step === 2 && <Summary questions={questions} answers={answers} />}
    </div>
  );
}

export default App;
