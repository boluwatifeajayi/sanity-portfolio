import React from "react"
import {NavLink} from "react-router-dom";
import cv from '../images/bolusCV.pdf';




export default function Navbar(){

      function refreshPage() {
        window.location.reload(false);
      }



      function Open(){
        document.getElementById("menuBtn").style.display = 'none';
        document.getElementById("closeBtn").style.display = 'block';
      }

      function Close(){
        document.getElementById("menuBtn").style.display = 'block';
        document.getElementById("closeBtn").style.display = 'none';
      }

      

      
     
    
    return(


<header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
      <span className="btn btn-p"  onClick={refreshPage}>
        <NavLink to="/">BOLU.AJ</NavLink> 
      </span>
  </div>

   <label htmlFor="menu-toggle" className="men">
    <i className="fa fa-bars my-menu men " id="menuBtn" onClick={Open}></i>
    <i className="fa fa-close my-menu men" id="closeBtn" onClick={Close}></i>

   </label>
  <input className="hidden" type="checkbox" id="menu-toggle" />

  <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul className="lg:flex items-center text-base">
                 
             <li onClick={refreshPage}><NavLink to="/about">ABOUT ME</NavLink></li>
             <li onClick={refreshPage}><NavLink to="/resume">MY RESUME</NavLink></li>
             <li onClick={refreshPage}><NavLink to="/project">MY PROJECTS</NavLink></li>
            
             <li onClick={refreshPage}><NavLink to="/post">MY BLOG</NavLink></li>
             <li onClick={refreshPage}><NavLink to="/contact">CONTACT ME</NavLink></li>
      </ul>
    </nav>
    <a href={cv} className="p-btn cv-btn" target="_blank" rel="noreferrer">View CV</a>

  </div>

  </header>

    )
}