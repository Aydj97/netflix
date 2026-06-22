// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer,   } from "../components"

import HeaderSigin from "../components/block/HeaderSigin"

const SignInLayout = () => {
  return (
    <div className="bg-[url('/images/bg-sigin.png')] bg-center bg-cover ">
        <HeaderSigin/>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SignInLayout