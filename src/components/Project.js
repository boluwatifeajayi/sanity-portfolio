import React, {useEffect, useState} from "react"
import sanityClient from "../client";

export default function Project(){

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            project,
            tools,
            link,
            gitlink,
            tags
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, []);

    return (
        <main className="project-section">
            <section className="container mx-auto ">
            <h1 className="welcome about-head resume-head">0.4 {" "}<span className="secondary">The Projects...</span></h1>
            <hr/>
                
                <section>
                    {projectData && projectData.map((project, index) => (
                    
                    <div className="card">    
                    <div className="container">
                        <h4 className="card-title">
                        <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a>
                        </h4>
                        <p className
                        ="project-type">
                        Type:{" "}{project.projectType}
                        </p>
                        <p className="card-sub">Tech : {project.place}</p>
                        <p className="card-content">{project.description}</p>   
                        {/* <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer" className="">
                   View The Project{" "}
                <span role="img" aria-label="right pointer">
                   👉   
                </span>
               </a>  */}

               <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer" className="btn r-btn link-btn">Check Out {" "} <i className="fa fa-link"></i></a><a href={project.gitlink} alt={project.title} target="_blank" rel="noopener noreferrer" className="btn p-btn git-btn">Github   {" "}<i className="fa fa-github"></i></a> 
                    </div>
                </div>
                   
                    ))}
                </section>
               
            </section>
        </main>
        )
}