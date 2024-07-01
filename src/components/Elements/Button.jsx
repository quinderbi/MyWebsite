import React from 'react'

const Button = (props) => {
  const { children, href } = props

  return (
    <div className="flex flex-wrap pb-1 ps-1 w-fit">
      <a href={href} className="relative">
        <span className="absolute bg-black w-full h-full rounded mt-1 -ms-1"></span>
        <span className="relative inline-block border-2 border-black bg-white rounded px-5 py-1 hover:bg-yellow-500 duration-100">{children}</span>
      </a>
    </div>
  )
}

export default Button