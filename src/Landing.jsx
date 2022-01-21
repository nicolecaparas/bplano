import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {  
  return (  

    <div className="container md:mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-amber-400 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Send your box the easy way! 
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-lg slide-in-bottom-subtitle">
            Carefully planned with time and care your care package and get the right service to do it.</p>
    
        <div className="flex w-full justify-center md:justify-start pb-15 lg:pb-0 fade-in">
        <Link to='/boxplanner'>
            <button class="btn btn-warning">Get Started</button>
        </Link>
            </div>
        </div>
    
    <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
    <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="./images/BPlano_MD.png" />
    </div>
    </div>
   
  )
}

export default Landing
