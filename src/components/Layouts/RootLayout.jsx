import React from 'react'

import Navbar from '../Elements/Navbar'
import Footer from '../Elements/Footer'


const RootLayout = (props) => {
  const {children} = props
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout