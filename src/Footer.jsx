import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className="Foot">
        <footer className="p-10 footer bg-yellow-400 text-white font-sans footer-center md:fixed md:bottom-0 md:left-0">
  <div className="grid grid-flow-col gap-4">
    <Link to="./ourstory" className="link link-hover">Our Story</Link> 
    <Link to="./contact" className="link link-hover">Contact</Link> 
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
    <i class="fab fa-instagram fa-3x text-white md:fa-2x md:fa-lg"></i> 
    <i class="fab fa-facebook-square fa-3x text-white md:fa-2x md:fa-lg"></i>
    <i class="fab fa-youtube fa-3x text-white md:fa-2x md:fa-lg"></i>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by BPlano</p>
  </div>
</footer>
    </div>
  )
}

export default Footer
