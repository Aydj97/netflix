// import React from 'react'

import { Outlet } from "react-router-dom"
import HeaderWhite from "../components/block/HeaderWhite"
import FooterWhite from "../components/block/FooterWhite"

const SignUpLayout = () => {
  return (
    <div>
        <HeaderWhite/>
        <Outlet/>
        <FooterWhite/>

    </div>
  )
}

export default SignUpLayout