import React from 'react'
import newestLogo from '../assets/newestLogo.png';
import './footer.css'

const Footer = () => {
  return (
    <div className="footer fixed bottom-0 w-full bg-cyan-200/15 backdrop-blur-md px-4 z-50">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-4 text-center">
        <img src={newestLogo} alt='logo' className="h-8 w-8 rounded-full shrink-0"/>
        <span className="text-white text-[0.65rem] sm:text-sm whitespace-nowrap">
          © 2025 Sentient Analytics
        </span>
        <span className="text-white text-[0.65rem] sm:text-sm whitespace-nowrap">
         Designed & Developed by: O'marr Reid
        </span>
      </div>
    </div>
  )
}

export default Footer