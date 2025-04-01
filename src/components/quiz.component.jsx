import React, {useState} from 'react';
import './quiz.styles.css';

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter"
  },
  {
    id: 3,
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Jane Austen", "Charles Dickens"],
    answer: "Harper Lee"
  }
];




export default function Quiz(){
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleClickedAnswers = (questionId, option) => {
        setSelectedAnswers((prev) => {
            return {
                ...prev,
                [questionId]: option
            };
        })
    }

    return(
        <div>
            <h1>Quiz</h1>
            <div className="quiz-container">
                {questions.map((question) => (
                    <div key={question.id} className="question-card">
                        <h2>{question.question}</h2>
                        <ul>
                            {question.options.map((option, index) => (
                                <li 
                                    key={index}
                                    className={selectedAnswers[question.id] === option ? 'selected' : ''}
                                    onClick={() => handleClickedAnswers(question.id, option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}