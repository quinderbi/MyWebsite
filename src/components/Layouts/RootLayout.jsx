import React from 'react'

import Navbar from '../Elements/Navbar'


const RootLayout = (props) => {
  const {children} = props
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default RootLayout