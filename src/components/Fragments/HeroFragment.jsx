import React from 'react'
import Button from '../Elements/Button'


const HeroFragment = () => {
  return (
    <div className='mt-36 mb-16 sm:my-0'>
      <h1 className="font-rubik text-3xl sm:text-2xl lg:text-3xl font-medium">
        Hi, my name is <span className="text-yellow-500 whitespace-nowrap">Quin Derbi</span>
      </h1>
      <p className="font-rubik text-lg sm:text-sm md:text-md lg:text-lg mb-6">
        Machine Learning and Data Science Enthusiast
      </p>
      <Button href="#"><p className="font-rubik text-md sm:text-xs md:text-sm lg:text-md">Know more</p></Button>
    </div>
  )
}

export default HeroFragment