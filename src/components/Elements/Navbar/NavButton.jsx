import React from 'react'

const NavButton = ({onClick,type,className}) => {
  
  return (
    <button 
      className={`h-fit w-fit ${className}`}
      onClick={onClick}
      >
      <svg className="w-6 h-6 justify-self-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={type === 'close' ? "M0 0 14 14M7 7 7 7M0 14 14 0" : "M0 2 14 2M0 7 14 7M0 12 14 12"}/>
      </svg>
    </button>
  )
}

export default NavButton