import React from "react"
import {NavLink} from "react-router-dom";
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
            <span className="btn r-btn"><NavLink to="/resume">View Resume</NavLink></span><span className="btn p-btn"><NavLink to="/project">View Projects</NavLink></span>
            <div className="the-socials">
                <a href="mailto:bolu4good@gmail.com"><i className="fa fa-envelope-square icon"></i></a>
                <a href="https://github.com/boluwatifeajayi" target="_blank" rel="noreferrer"  ><i className="fa fa-github icon"></i></a>
                <a href="https://www.instagram.com/bolu.aj/" target="_blank" rel="noreferrer" ><i className="fa fa-instagram icon"></i></a>
                <a href="https://www.linkedin.com/in/bolu-ajayi/" target="_blank" rel="noreferrer" ><i className="fa fa-linkedin icon"></i></a>
            </div>
                
          </div>
      </div>
</main>


</section>
        
    )
}