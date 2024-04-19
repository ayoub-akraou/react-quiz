import React from 'react'
import reactLogo from '../assets/react.svg'
export default function Header() {
  return (
    <header className='flex gap-4 md:gap-8 items-center justify-center px-6 py-16'>
      <img src={reactLogo} alt="" className='w-28 md:w-36'/>
      <h1 className='font-["Codystar",sans-serif] text-5xl md:text-6xl text-white font-bold'>The react quiz</h1>
    </header>
  )
}