import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

const QuizResult = ({result,retry}) => {
  return (

    <div className='result-screen'>
    <ReactSpeedometer
      width={250}
   height={250}
   maxValue={100}
   ringWidth={30}
  value={result.percentage}
  needleColor="black"
  startColor="red"
  segments={1000}
  maxSegmentLabels={5}
  endColor="green"
  needleTransition="easeElastic"
    needleHeightRatio={0.5}
    />
    <h2 className='result'>Result: {result.percentage}%</h2>
    <p className='correct'>{result.correct} Correct</p>
    <p className='incorrect'> {result.total-result.correct} Incorrect</p> 
    <button onClick={retry}>Retry</button>
    </div>

 
  )
}

export default QuizResult