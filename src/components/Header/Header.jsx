


import React, { useEffect, useRef} from 'react'

import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/images/Logo.jpg'
import '../Styles/header.css'



 const Header =()=> {


  useEffect(()=>{

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");


menuOpenBtn.onclick = function() {
navLinks.style.top = "0";

}

menuCloseBtn.onclick = function() {
  navLinks.style.top = "-100%";
}

document.onclick=function(e){
  if( !navLinks.contains(e.target) && !menuOpenBtn.contains(e.target)){
    navLinks.style.top = "-100%";
    }
 }
 });


  return (
    <div >
  <nav >
    <div class="navbar">
      <i class='bx bx-menu'><label for="checkbox_toggle" class="hamburger" style={{color:"white"}}>&#9776;</label></i>
      <div class="logo"><NavLink to="/" style={{color:"white",fontSize:"40px",fontWeight:"500"}}>33%FUND</NavLink></div>
      <div class="nav-links" >
        <div class="sidebar-logo">
          <i class='bx bx-x' style={{marginLeft:"70%",marginTop:"20%"}}></i>
        </div>
        <ul class="links">
        <li style={{display:"none"}}><NavLink  to="/">Home</NavLink></li>

<li>    <HashLink smooth to="/#about">ABOUT US</HashLink> </li>


<li> <HashLink smooth to="/#stratgies">OUR STRATEGIES</HashLink></li>

 <li> <HashLink smooth to="/#leadership">LEADERSHIP TEAM</HashLink></li>

<li> <HashLink smooth to="/#careers">CAREERS</HashLink></li>

<li><a href="/contact">CONTACT</a></li>
  
        </ul>
      </div>
          </div>
  </nav>

    </div>
  )
}
export default Header;

