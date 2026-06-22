// import React from 'react'

import { NavLink } from "react-router-dom"

const FooterWhite = () => {
  return (
   <div className=" w-full h-70 bg-[#f2f2f2] text-[#000000b3] shadow-blue-100 font-sans  flex justify-center items-center ">
      <div className="w-[90%] flex justify-center items-center flex-col gap-17 lg:pl-17">
        <div className=" w-[90%] flex flex-col gap-4  ">
          <h4 className=" flex gap-1 font-medium tex-[18px] font-sans ">Questions?  
            <span className="border-b  ">Contact us.</span> </h4>

          <ul className=" grid lg:grid-cols-4 lg:gap-8 gap-3   ">
            <li className=" border-b w-8 ">
              <NavLink to="/">FAQ</NavLink>
            </li>
            <li className="  w-">
              <NavLink to="/">Help Center <hr className="w-20" /></NavLink>
            </li>
            <li className=" border-b w-23 ">
              <NavLink to="/">Terms of Use</NavLink>
            </li>

            <li className=" border-b w-12 ">
              <NavLink to="/">Privacy</NavLink>
            </li>

            <li className=" border-b w-34 ">
              <NavLink to="/">Cookie Preferences</NavLink>
            </li>

            <li className=" border-b w-40 ">
              <NavLink to="/">Corporate Information</NavLink>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default FooterWhite