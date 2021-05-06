import React from "react"
import {NavLink, Link} from "react-router-dom";
import bolu from '../images/me.png';


export default function Home(){
    
    return (
        
<section>
      
<main>
      <div className="home-body">
     
          <div className="action1">
              
              <img src={bolu} className="my-image" alt="bolu"/>
          </div>
          <div className="action2">
            <p className="welcome">0.1 {" "}<span className="secondary">Welcome To My Portfolio Site I'm...</span></p>
            <hr/>
            <p className="my-name">Boluwatife <span className="secondary">Ajayi</span>.</p>
            <p className="software">An Enthusiastic Software Developer {"</>"} </p>
            <a className="btn r-btn"><NavLink to="/resume">View Resume</NavLink></a><a className="btn p-btn"><NavLink to="/project">View Projects</NavLink></a>
            <div className="the-socials">
                <a href="mailto:bolu4good@gmail.com" className="fa fa-envelope-square icon"></a>
                <a href="https://github.com/boluwatifeajayi" target="_blank" className="fa fa-github icon" ></a>
                <a href="https://www.instagram.com/bolu.aj/" target="_blank" className="fa fa-instagram icon"></a>
                <a href="https://www.linkedin.com/in/bolu-ajayi/" target="_blank" className="fa fa-linkedin icon"></a>
            </div>
                
          </div>
      </div>
</main>


</section>
        
    )
}