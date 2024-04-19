import React from 'react'

export default function FinishScreen({points, maxPoints, highScore, dispatch}) {
  const percentage = Math.trunc(points / maxPoints * 100);
  let emoji;
  if(percentage === 100) emoji = "🥇";
  if(percentage < 100) emoji = "🎉"
  if(percentage < 80) emoji = "🙂"
  if(percentage < 50) emoji = "🤔"
  if(percentage === 0) emoji = "🤦‍♂️"
  return (
    <>
      <p className='mb-4 px-8 py-4 rounded-full bg-sky-500 w-full font-medium text-2xl'>{emoji} You scored <strong>{points}</strong> out of {maxPoints} ({percentage}%)</p>
      <p className="text-xl">(Highscore: {highScore}points)</p>
      <button className='btn-primary' onClick={() => dispatch({type:"restart"})}>Restart</button>
    </>
  )
}
