import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What's the difference between props and state?",
    answer: "State helps to hold data over time, while props are used to pass data into a component"
  },
  {
    id: 2,
    question: "Why are props useful?",
    answer: "It is a temporary form of data passed into a component, which is controlled by the parent components."
  },
  {
    id: 3,
    question: "What should you do to make dynamic data?",
    answer: "Use state, then update it when you'd like the data to change."
  },
]

function Flashcards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null)
  }

  return(
    <div className="flashcards">{questions.map(question => (
    <div 
      key={question.id} 
      onClick={() => handleClick(question.id)}
      className={question.id === selectedId ? "selected" : ""}
    >
      <p>
        { question.id === selectedId ? question.answer : question.question}
      </p>
    </div>
  ))}
  </div>
  );
}