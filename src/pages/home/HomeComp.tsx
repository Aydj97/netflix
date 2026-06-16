// import React from 'react'


import FrequentlyQ from "./FrequentlyQ"
import GetStarted from "./GetStarted"
import Hero from "./Hero"
import More from "./More"
import TrendingNow from "./TrendingNow"

export const HomeComp = () => {
  return (
    <div>
        <Hero/>
        <TrendingNow/>
        <More/>
        <FrequentlyQ/>
        <GetStarted/>
        
       
    </div>
  )
}
