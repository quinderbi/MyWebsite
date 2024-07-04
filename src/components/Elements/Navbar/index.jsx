import React from 'react'

const pages = [
  {name: 'About', path: '/about'},
  {name: 'Resume', path: '/resume'},
  {name: 'Contact', path: '/contact'},
  {name: 'Project', path: '/project'},
  {name: 'Blog', path: '/blog'},
]

const ItemPage = ({name, path}) => {
  return (
    <li className="text-black text-3xl">
      <a href={path}>{name}</a>
    </li>
  )
}

const sidebar = document.getElementById('sidebar');
const openSidebarButton = document.getElementById('open-sidebar');
    
openSidebarButton.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('-translate-x-full');
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        sidebar.classList.add('-translate-x-full');
    }
});

const Navbar = () => {
  return (
    <>
    <button class="absolute right-0 mx-5 my-7" id="open-sidebar">
      <svg className="w-6 h-6 justify-self-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M0 2 14 2M0 7 14 7M0 12 14 12"/>
      </svg>
    </button>
    <div id="sidebar" className="absolute flex flex-col justify-between p-5 bg-white min-h-screen border-t-8 border-orange-700 w-full max-w-md -translate-x-full duration-300">
      <div className="grid grid-cols-7 gap-4 ">
        <div className='col-span-3'><p>Social Platform</p></div>
        <div className='grid col-span-3'>
            <span>Instagram</span>
            <span>Linkedin</span>
            <span>Github</span>
        </div>
        <button class="h-fit " id="close-sidebar">
          <svg className="w-6 h-6 justify-self-end" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M0 0 14 14M7 7 7 7M0 14 14 0"/>
          </svg>
        </button>
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