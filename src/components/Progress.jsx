import React from 'react'

export default function Progress({index, numOfQuestions, points, maxPoints, answer}) {
  return (
    <header>
<progress className='w-full rounded-full overflow-hidden' value={index + Number(answer !== null)} max={numOfQuestions}></progress>
<div className="flex justify-between">
   <p className="">{index + 1} / {numOfQuestions}</p>
   <p className="">{points} / {maxPoints}</p>
</div>
    </header>
  )
}
