import React from 'react'
import { Link } from 'react-router-dom'

function BoxPlanner () {
  return (
<section className="bg-white py-8">
  <div className="container mx-auto flex items-center flex wrap pt-2 pb-4">
   
    <div className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-2 py-3">
          <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
            Choose your service
          </h1>
        </div>
        </div>
    </div>
    <div className="lg:flex flex-row justify-center">
    <div className="w-full md:w-1/2 p-6 flex flex-col xl:w-1/4 p-6 flex flex-col ">
         <div className="pt-3 flex items-center justify-center">
           <p className="leading-normal md: text-center  justify-center items-center slide-in-bottom-subtitle">
            Do you own a balikbayan box company?</p>
          </div>
            <img src="./images/Shipper.png"/>
            <div class="flex justify-center">
            <Link to='/shipper'>
            <button class="btn btn-warning items-center">Shipper</button>
            </Link>
            </div>
    </div>

    <div className="w-full md:w-1/2 p-6 flex flex-col xl:w-1/4 p-6 flex flex-col">
         <div className="pt-3 flex items-center justify-center">
            <p className="leading-normal md: text-center justify-center items-center slide-in-bottom-subtitle">
            Do you want to ship a balikbayan box?</p>
          </div>
            <img src="./images/Planner.png"/>
            <div class="flex justify-center">
            <Link to='/planner'>
            <button class="btn btn-warning">Planner</button>
            </Link>
            </div>
    </div>
   </div>
</section>

    

  )
}

export default BoxPlanner
