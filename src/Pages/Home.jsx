import React from 'react'
import "../Styles/home.css"
import page_break from "../Images/page-break.png"
const Home = () => {
  return (
    <div className='home-body'>
    <frame>
    <div>
      <h1><span id="heading-1">The</span><br/><span id="heading-2">Fabrication</span><br/><span id="heading-3">Expert</span></h1>
    </div>
    </frame>
    <img src={page_break} id="page_break"/>
    <frame>

    </frame>
    </div>
  )
}

export default Home
