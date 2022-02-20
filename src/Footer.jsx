import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcon from './Footer/SocialIcon'

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
        <SocialIcon iconName="instagram"/>
        <SocialIcon iconName="facebook-square"/>
        <SocialIcon iconName="youtube"/>
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
