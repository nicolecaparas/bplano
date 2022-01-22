import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {  
  return (  

    <div className="container md:mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full lg:w-2/5 mt-10 lg:mt-0 justify-center px-8">
            <h1 className="my-4 text-2xl md:text-4xl text-amber-400 font-bold leading-tight text-center slide-in-bottom-h1 lg:text-left px-3">
            Send your box the easy way! 
            </h1>
            <p className="leading-normal text-base md:mr-3 mb-8 text-center text-lg slide-in-bottom-subtitle lg:text-left px-3">
            Carefully planned with time and care your care package and get the right service to do it.</p>
    
        <div className="flex w-full justify-center lg:justify-start pb-15 py-3 pl-0 lg:pb-0 fade-in justify-start lg:pl-5">
        <Link to='/boxplanner'>
            <button class="btn btn-warning">Get Started</button>
        </Link>
            </div>
        </div>
    
    <div className="w-full lg:w-3/5 py-6">
    <img className="w-5/6 mx-auto lg:slide-in-bottom" src="./images/BPlano_MD.png" />
    </div>
    </div>
   
  )
}

export default Landing
