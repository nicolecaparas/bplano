import React from 'react'

function BoxPlanner () {
  return (
    <div class="hero min-h-screen">
  <div class="text-center hero-content">
    <div class="max-w-lg">
      <h1 class="mb-5 text-5xl font-bold">
            Choose your service
          </h1> 
           <div className="md:flex md:mx-auto">
              <div className="items-center pt-5">
                <p className="leading-normal text-lg text-center md: items-center text-2xl mb-8 text-center md: text-center slide-in-bottom-subtitle">
                Do you own a balikbayan box company?</p>
                <img className="max-w-md" src="./images/Shipper.png"/>
                <button class="btn btn-warning">Shipper</button>
               </div>

                <div className="md:flex md:flex-row flex-start">
                    <div className="justify-center pt-5">
                    <p className="leading-normal text-lg md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
                     Do you want to ship a balikbayan box?</p>
                    <img className="max-w-md" src="./images/Planner.png"/>
                    <button class="btn btn-warning">Planner</button>
                    </div>
                </div>
            </div>
      </div> 
    </div>
    
  </div> 

  )
}

export default BoxPlanner
