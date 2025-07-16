import React from 'react'
import Header from '../(components)/Header'
import FooterSection from '../(components)/Footer'
import MainSection from '../(components)/MainSection'
import HowItWorksSection from '../(components)/HowItWorks'

function page() {
  
  return (
    
    <div>
      <Header/>
      <MainSection/>
      <HowItWorksSection/>
      <FooterSection/>
    </div>
    
  )
}

export default page