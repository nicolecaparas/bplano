import React from 'react'

function BoxPlanner () {
  return (
<section className="bg-white py-8">
  <div className="container mx-auto flex items-center flex wrap pt-4 pb-12">
   
    <div className="w-full z-30 top-0 px-6 py-1">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-2 py-3">
          <h1 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
            Choose your service
          </h1>
        </div>
        </div>
    </div>
    <div className="lg:flex flex-row justify-center">
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
         <div className="pt-3 flex items-center justify-center">
           <p className="leading-normal md: text-center items-center slide-in-bottom-subtitle">
            Do you own a balikbayan box company?</p>
          </div>
            <img src="./images/Shipper.png"/>
            <button class="btn btn-warning">Shipper</button>
    </div>

    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
         <div className="pt-3 flex items-center justify-center">
            <p className="leading-normal md: text-center items-center slide-in-bottom-subtitle">
            Do you want to ship a balikbayan box?</p>
          </div>
            <img src="./images/Planner.png"/>
            <button class="btn btn-warning">Planner</button>
    </div>
   </div>
</section>

    

  )
}

export default BoxPlanner
