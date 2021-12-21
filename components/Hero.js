import React from 'react'

const Hero = () => {
   return (
      <div className="w-full bg-center bg-cover h-56" style={{ backgroundImage: `url('https://www.cliftonhillphysiotherapy.com.au/wp-content/uploads/2020/06/sport-1030x450.jpg')` }}>
         <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
               <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                  <span className='text-4xl capitalize'>The best blog for sports news</span>
               </h1>
            </div>
         </div>
      </div>
   )
}

export default Hero
