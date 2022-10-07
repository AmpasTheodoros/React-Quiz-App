import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  
  //Question numbers counter
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const[score, setScore] = useState(0)

  const[bestScore, setBestScore] = useState(0)

  //If the button is clicked add plus one to the current question number
  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  }

  //Reset Quiz
  const handleResetButtonClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false)
  }

  //Keeping track of the best score
  const handleBestScore = (score) => {
    if (score > bestScore){
      setBestScore(score);
    }
  }


	return (
		<div className='app'>
			{/*logic to display the score when the user has answered all the questions */}
			{showScore ? (
        handleBestScore(score),
				<div className='score-section'>You scored {score} out of {questions.length}<p>Best score is {bestScore}</p><button onClick={handleResetButtonClick}>Reset</button></div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOptions)=> <button onClick={()=> handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}