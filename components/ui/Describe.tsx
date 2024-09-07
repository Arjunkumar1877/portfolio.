import React from 'react'
import { InfiniteMovingCards } from './InfiniteMovingCards'
import { testimonials } from '@/data'

const Describe = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8" id="techs">
      <h1 className="text-3xl font-bold text-center mb-12">Technologies & Tools: Mastery in Action</h1>
      <div className="flex flex-col items-center justify-center">
       <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
       <InfiniteMovingCards items={testimonials} direction='right' speed='normal' />
       </div>
        </div>
        </div>
  )
}

export default Describe