import React from "react"
import {NavLink} from "react-router-dom";





export default function Footer(){

      
    
    return(

<center>
<footer className="footer">
<ul>
                <li><NavLink to="/">home</NavLink></li>
                 <li><NavLink to="/about">about</NavLink></li>
                 <li><NavLink to="/resume">resume</NavLink></li>
                 <li><NavLink to="/project">projects</NavLink></li>
                 <li><NavLink to="/post">blog</NavLink></li>
                 <li><NavLink to="/contact">contact</NavLink></li>
                
</ul>
<div className="footer-love">
    coded with <i className="fa fa-heart"></i> by Bolu
</div>
</footer>
</center>


    )
}