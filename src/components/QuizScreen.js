import React, { useState,useEffect } from 'react';
// import QuestionList from '../data/Questions.json';
import QuizResult from './QuizResult';
import Question from './Question';

const QuizScreen = ({isStart,retry}) => {
 
  
 // var QuestionList=[];
  const [QuestionList,setQuestionList]=useState([]);
  async function getData(){
   
  let res=await fetch('https://b28555a3-3955-4ee2-859c-6c9a0d593f5c.mock.pstmn.io/q1');
  let data= await res.json();
  // console.log(data);
  // QuestionList=data.data;
  setQuestionList(data.data);
  console.log(QuestionList);
  
  // .then((res)=>{
  //   console.log(res.json());
  //   return res.json();
  // }).then((val)=>{
  //   console.log(val);
  //     QuestionList=val
  // })
};

useEffect(()=>{
  getData();
},[isStart]);



    const [currQuestionIndex,setCurrQuestionIndex]=useState(0);
    const [markedAnswers,setMarkedAnswers]=useState(new Array(QuestionList.length));
    const isQuestionEnd=currQuestionIndex===QuestionList.length;

    function calculateResult(){
    
      console.log({markedAnswers});
      
      let correct=0;
      QuestionList.forEach((question,index)=>{
        if(question.correctAnswerIndex==markedAnswers[index]){
          correct++;
        }
      });
      return {
        total:QuestionList.length,
        correct:correct,
        percentage:(correct/QuestionList.length)*100
      }
    }
  return (
    <div className='quiz-screen' >
    {
      
      QuestionList.length==0? '':  isQuestionEnd?(
        <QuizResult 
          result={calculateResult()}
          retry={retry}
        />
       ) :( 
        
        <Question question ={QuestionList[currQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currQuestionIndex+1}
          setAnswer={(index)=>{
            setMarkedAnswers((markedAnswers)=>{
              let newArr= [...markedAnswers];
              
              newArr[currQuestionIndex]=index;
              return newArr;
            });

            setCurrQuestionIndex(currQuestionIndex+1);
          }}
        />
       )
    }
    
    </div>
  )
}

export default QuizScreen