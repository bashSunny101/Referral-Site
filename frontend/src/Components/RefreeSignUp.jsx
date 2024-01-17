import React from 'react'
import './RefreeSignUp.css'
// import logo from '../assets/logoimg'

function RefreeSignUp() {
  return (
    <>
    <div id='background' >
      <div id='nav' >
      <div id='logo' >
        <img src={'../assets/logoimg.png' }/>
        <span id='your' >YOUR </span>
        <span id='logo' >LOGO</span>
        </div>
      </div>
      <div id='connectingtalents' >
      <div id='connecting'>Connecting  </div>
      <div id='talents' >Talents  </div>
      </div>
      <div id='new'>
      <div id='createnew'>Create a new account </div>
      </div>
      <div id='signin'>
        <span id='already'> already have one! <a href='www.google.com'>sign in here</a></span>
      </div>  
    </div>
      
    </>
  )
}

export default RefreeSignUp
