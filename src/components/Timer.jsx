import React, { useEffect } from 'react'

export default function Timer({dispatch, remainingTime}) {
   console.log(remainingTime);
   console.log(remainingTime / 60);
   // console.log(Math.trunc(remainingTime / 60));
   const mins = String(Math.trunc(remainingTime / 60)).padStart(2, "0")
   const secs = String(Math.trunc(remainingTime % 60)).padStart(2, "0")
   useEffect(function() {
      const id = setInterval(() => {
         dispatch({type: "tick"})
      }, 1000);
      return () => clearInterval(id)
   }, [dispatch])

  return (
    <p className='rounded-full px-4 py-2 border-2 border-solid border-white/20'>{mins + ":" + secs}</p>
  )
}
