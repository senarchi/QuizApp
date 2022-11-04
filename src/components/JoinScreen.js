import React from 'react'

const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
        <p>Quiz</p>
        <button onClick={start}>Start</button>
    </div>
  )
}

export default JoinScreen