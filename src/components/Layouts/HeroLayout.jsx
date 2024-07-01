import React from 'react'
import HeroFragment from '../Fragments/HeroFragment'
import IlustrationSVG from '../../assets/Programmer.svg'

const HeroLayout = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:h-screen mx-10 md:mx-16 lg:mx-20">
      <div className="sm:w-1/2">
        <HeroFragment></HeroFragment>
      </div>
      <div className="sm:w-1/2">
        <img src={IlustrationSVG} alt="Programmer" className="w-full" />
      </div>
    </div>
  )
}

export default HeroLayout