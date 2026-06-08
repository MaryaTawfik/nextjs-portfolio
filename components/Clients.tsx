import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
// 1. Added companies to the data import
import { testimonials, companies } from '@/data' 

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading text-center text-4xl font-bold">
        Kind words from {" "}
        <span className="text-purple-500">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        {/* 2. Fixed "items-center" typo and layout spacing */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          
          {/* 3. Fixed destructuring syntax and added explicit return statement */}
          {companies.map(({ id, img, name, nameImg }) => {
            return (
              <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                <img 
                  src={img}
                  alt={name}
                  className="md:w-10 w-5 object-contain"
                />
                <img 
                  src={nameImg}
                  alt={name}
                  className="md:w-24 w-20 object-contain"
                />
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Clients