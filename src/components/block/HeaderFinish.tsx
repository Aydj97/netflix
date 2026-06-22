// import React from 'react'
import logo from "../../assets/BrandAssets_Logos_01-Wordmark-removebg-preview.png"

import { NavLink } from "react-router-dom"

const HeaderFinish = () => {
  return (
     <div className=" w-full  flex justify-center items-center bg- h-25  ">
      <div className=" w-[90%] ">
        <div className=" w-50% flex justify-between items-center "> 
          <div className="w-[25%]"><img src={logo} alt="" /> </div>  <NavLink to="/ signIn" className=" w-21 h-8 bg-[#e60914] flex justify-center items-center text-[#ffffff] font-bold rounded-sm"> <button className="text-[13px]">Sign Out </button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default HeaderFinish