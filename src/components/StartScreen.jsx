import React from 'react'

export default function StartScreen({numberOfQuestions, dispatch}) {
  return (
    <div className='text-white text-center'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6'>Welcome to the React Quiz!</h2>
      <p className="text-3xl mb-8 font-medium">{numberOfQuestions} questions to test your React mastery</p>
      <button onClick={() => dispatch({type: "start"})} className="btn-primary mx-auto">Let's start!</button>
    </div>
  )
}
