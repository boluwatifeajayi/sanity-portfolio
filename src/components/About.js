import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client"

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About(){
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0])).catch(console.error);
    }, []);

    if(!author) return <div className="loading">Loading...</div>

    return (
        <main className="">
            
            <div className="">
                <section>

                    <div className="about-content aa">
                   

                    <div className="about-action">
                    <h1 className="welcome about-head">0.2 {" "}<span className="secondary">About Me...</span></h1>
                    <hr/>

                        <h1 className="about-name">
                            Hey there. I'm {" "} 
                            <span className="secondary">{author.name}</span>
                        </h1>
                        <div className="about-bio">
                            <BlockContent blocks={author.bio} projectId="x230fyvv" dataset="production" />
                            <span className="btn r-btn"><NavLink to="/resume">View Resume</NavLink></span><span className="btn p-btn"><NavLink to="/project">View Projects</NavLink></span>
                        </div>
                    </div>
                    <div className="about-action2">
                        
                        <img src={urlFor(author.authorImage).url()} className="my-image" alt={author.name}/>
                    </div>
                    
                    </div>


                    <div className="about-content bb">


                    <div className="about-action2 bb">
                        
                        <img src={urlFor(author.authorImage).url()} className="my-image" alt={author.name}/>
                    </div>
                   

                    <div className="about-action bb">
                    <h1 className="welcome about-head">0.2 {" "}<span className="secondary">About Me...</span></h1>
                    <hr/>

                        <h1 className="about-name">
                            Hey there. I'm {" "} 
                            <span className="secondary">{author.name}</span>
                        </h1>
                        <div className="about-bio">
                            <BlockContent blocks={author.bio} projectId="x230fyvv" dataset="production" />
                            <span className="btn r-btn"><NavLink to="/resume">View Resume</NavLink></span><span className="btn p-btn"><NavLink to="/project">View Projects</NavLink></span>
                        </div>
                    </div>
                    
                    
                    </div>


                     
                    
                 

                    
                    
                </section>
            </div>
        </main>
    )
}