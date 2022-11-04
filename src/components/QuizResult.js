import React from 'react'

const QuizResult = ({result,retry}) => {
  return (

    <div className='result-screen'>
    <h2>Result: {result.percentage}%</h2>
    <p className='correct'>{result.correct} Correct</p>
    <p className='incorrect'> {result.total-result.correct} Incorrect</p> 
    <button onClick={retry}>Retry</button>
    </div>

 
  )
}

export default QuizResult