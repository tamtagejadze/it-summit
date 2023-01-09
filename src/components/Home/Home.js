import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import TechEvent from './HomeContent/TechEvent'
import TechSummit from './HomeContent/TechSummit'

function Home() {
  return (
    <>
        <Header/>
            <TechSummit/>
            <TechEvent/>
        <Footer/>
    </>   
  )
}

export default Home