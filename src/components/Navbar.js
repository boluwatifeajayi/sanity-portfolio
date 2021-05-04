import React from "react"
import {NavLink, Link} from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import ScriptTag from 'react-script-tag';




export default function Navbar(){


    function handleClick(e) {
        // e.preventDefault();
        const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')

  
})

      }

      function refreshPage() {
        window.location.reload(false);
      }


      function menuAnimation(){
        const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
          if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
          } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
          }
        });
      }

      
     
    
    return(
        <header className="sm-nav">
        {/* <!-- <div class="menu-toggle" id="hamburger">
            <i class="fas fa-bars"></i>
        </div> --> */}
       
        <nav className="small-nav">
        <header>

            <div className="menu-btn" onClick={menuAnimation}>
                <div class="toggle menu-btn__burger" onClick={handleClick} >
            </div>
      
      
        
      </div>

      
      <div class="navigation">
        <ul>
          

            <li onClick={refreshPage}><NavLink to="/" exact >Home</NavLink></li>
            <li onClick={refreshPage}><NavLink to="/about">About Me</NavLink></li>
            <li onClick={refreshPage}><NavLink to="/resume">My Resume</NavLink></li>
            <li onClick={refreshPage}><NavLink to="/project">My Projects</NavLink></li>
            
            <li onClick={refreshPage}><NavLink to="/post">My Blog</NavLink></li>
            <li onClick={refreshPage}><NavLink to="/contact">Contact Me</NavLink></li>
        </ul>
        
      </div>
    </header>
            </nav>
        
        <div className="overlay"></div>
        <div className="container">
            {/* <h1 className="brand2"><NavLink to="/" exact>RESUME</NavLink></h1> */}
            <nav className="big-nav">
                <a href="" className="brand"><NavLink to="/">Bolu.aj</NavLink></a>
                

                <ul class="main-nav">
                    <li onClick={refreshPage}><NavLink to="/" exact >Home</NavLink></li>
                    <li onClick={refreshPage}><NavLink to="/about">About Me</NavLink></li>
                    <li onClick={refreshPage}><NavLink to="/resume">My Resume</NavLink></li>
                    <li onClick={refreshPage}><NavLink to="/project">My Projects</NavLink></li>
                    <li onClick={refreshPage}><NavLink to="/post">My Blog</NavLink></li>
                    <li onClick={refreshPage}><NavLink to="/contact">Contact Me</NavLink></li>
                </ul>
            </nav>
        </div>
</header>
    )
}