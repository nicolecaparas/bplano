import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => {
      setNavOpen(!navOpen)
    }

    return (
        <div>
            <div className="navbar mb-2 shadow-lg bg-yellow-400 text-neutral-content">
  <div className="px-2 mx-2 navbar-start">
    <Link to='/home'>
    <img className="max-h-20" src= "../images/BPlano_Logo.png" />
    </Link>
  </div> 
  <div className="hidden px-2 mx-2 navbar-center lg:flex">
    <div className="flex items-stretch">
      <Link to='/' className="btn btn-ghost btn-sm rounded-btn font-sans">
              Home
            </Link> 
      <Link to='./ourstory' className="btn btn-ghost btn-sm rounded-btn font-sans">
              Our Story
            </Link> 
      <Link to='./boxplanner' className="btn btn-ghost btn-sm rounded-btn font-sans">
              Box Planner
            </Link> 
      <Link to='./contactus' className="btn btn-ghost btn-sm rounded-btn font-sans">
              Contact
            </Link>
    </div>
  </div> 
  <div className="navbar-end">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
      </svg>
    </button>
  </div>
</div>
        </div>
    )
}

    export default Nav
    