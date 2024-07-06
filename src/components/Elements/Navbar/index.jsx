import React from 'react'
import NavButton from './NavButton'

const pages = [
  {name: 'About', path: '/'},
  {name: 'Resume', path: '/'},
  {name: 'Contact', path: '/'},
  {name: 'Project', path: '/'},
  {name: 'Blog', path: '/'},
]

const ItemPage = ({name, path}) => {
  return (
    <li className="text-black text-3xl">
      <a href={path}>{name}</a>
    </li>
  )
}

const Navbar = () => {
  return (
    <>
    <NavButton
      type="humberger" 
      onClick={() => {
        document.getElementById('sidebar').classList.toggle('-translate-x-full')
      }}
      className="fixed right-0 m-7"
    />
    <div id="sidebar" className="fixed flex flex-col justify-between p-5 backdrop-blur-md min-h-screen border-t-8 border-r border-r-slate-100 border-orange-600 w-full max-w-md -translate-x-full duration-300 delay-400 ease-in-out">
      <div className="grid grid-cols-7 gap-4 ">
        <div className='col-span-3'><p>Social Platform</p></div>
        <div className='grid col-span-3'>
            <span><a href="https://www.instagram.com/quinderbi_/" >Instagram</a></span>
            <span><a href="https://www.linkedin.com/in/quinderbi/" >Linkedin</a></span>
            <span><a href="https://github.com/quinderbi" >Github</a></span>
        </div>
        <NavButton
          type="close" 
          onClick={() => {
            document.getElementById('sidebar').classList.add('-translate-x-full')
          }}
          className="justify-self-end"
        />
      </div>
        <ul className='flex flex-col justify-center'>
          {pages.map((page, index) => (
            <ItemPage key={index} {...page} />
          ))}
        </ul>
      <p className='text-sm text-center'>©2024 Quin Derbi.<br />All rights reserved.</p>
    </div>
    </>
  )
}


export default Navbar