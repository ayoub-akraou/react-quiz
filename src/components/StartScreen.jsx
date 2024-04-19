import React from 'react'

export default function StartScreen({numberOfQuestions, dispatch}) {
  return (
    <div className='text-white text-center'>
      <h2 className='text-5xl font-bold mb-6'>Welcome to the React Quiz!</h2>
      <p className="text-3xl mb-8 font-medium">{numberOfQuestions} questions to test your React mastery</p>
      <button onClick={() => dispatch({type: "start"})} className="text-2xl px-6 py-2 border-2 border-solid border-white/15 bg-white/10 rounded-full ">Let's start!</button>
    </div>
  )
}
