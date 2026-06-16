// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"

const SignInLayout = () => {
  return (
    <div className="bg-[url('/images/bg-sigin.png')] bg-center bg-cover ">
        <Header/>
        
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SignInLayout