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
    const [score, setScore] = useState(null);

    const handleClickedAnswers = (questionId, option) => {
        setSelectedAnswers((prev) => {
            return {
                ...prev,
                [questionId]: option
            };
        })
    }

    const calculateScore = () => {
        let userScore = 0;
        questions.forEach((question) => {
            if (selectedAnswers[question.id] === question.answer) {
                userScore += 1;
            }
        });
        setScore(userScore);
    }

    const restartQuiz = () => {
        setSelectedAnswers({});
        setScore(null);
    }

    return(
        <div>
            <h1>Quiz</h1>
            <div className="quiz-container">
                {questions.map((question) => (
                    <div key={question.id} className="question-card">
                        <h2>{question.question}</h2>
                        <ul>
                            {question.options.map((option, index) => {
                                const isSelected = selectedAnswers[question.id] === option;
                                const isCorrect = option === question.answer;
                                const className = isSelected ? (isCorrect ? 'correct' : 'incorrect') : '';
                        
                                return (
                                    <li 
                                        key={index}
                                        className={className}
                                        onClick={() => handleClickedAnswers(question.id, option)}
                                    >
                                        {option} {isSelected && (isCorrect ? '✅' : '❌')}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}

            </div>
            <button 
                onClick={calculateScore}
                className='calculate-score-button'
            >
                Submit
            </button>
            {score !== null && (
                <div className="score-display">
                    <h2>Your Score: {score}/{questions.length}</h2>
                    <button onClick={restartQuiz} className='restart-button'>Restart Quiz</button>
                </div>
            )}
        </div>
    )
}