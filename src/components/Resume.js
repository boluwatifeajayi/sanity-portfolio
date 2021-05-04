import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";


export default function Resume(){

    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "resume"]{
            ExpTitle,
            ExpSub,
            ExpContent,
            EduTitle,
            EduSub,
            EduContent,
            sklTitle,
            sklSub,
            sklContent,
        }`).then((data) => setResumeData(data)).catch(console.error);
    }, []);

    // if(!ExpTitle) return <div className="loading">Loading...</div>

    return <div className="resume-section">
                <div>
    
                    <h1 className="welcome about-head resume-head">0.3 {" "}<span className="secondary">The Resume...</span></h1>
                    
                    <hr/>


                    <div className="resume-content">

                    {/* {resumeData && resumeData.map((resume, index) => (
                        
                        // <h1>{resume.ExpTitle}</h1>
                    ))} */}

                        <h3 className="main-resume-header">Experience / Profile</h3>
                            <div>
                            {resumeData && resumeData.map((resume, index) => (
                            <div class="card">
                                
                                <div class="container">
                                    <h4 className="card-title">{resume.ExpTitle}</h4>
                                    <p className="card-sub">{resume.ExpSub}</p>
                                    <p className="card-content">{resume.ExpContent}</p>     
                                </div>
                            </div>
                            ))}
                                <a className="btn p-btn cv resume-content">View My CV</a>
                            </div>

                            
                            

                            <h3 className="main-resume-header">Education and Certifications</h3>
                            <div>
                            {resumeData && resumeData.map((resume, index) => (
                            <div class="card">
                                
                                <div class="container">
                                    
                                    <h4 className="card-title">{resume.EduTitle}</h4>
                                    <p className="card-sub">{resume.EduSub}</p>
                                    <p className="card-content">{resume.EduContent}</p>   
                   
                                </div>
                            </div>
                             ))}
                            </div>

                            <h3 className="main-resume-header">Technical Skill Set</h3>
                            <div>
                            <div class="card">
                                
                                <div class="container">
                                    <ul>


                                        <li>HTML</li>
                                        <li>css</li>    
                                        <li>javascript</li>    
                                        <li>react</li> 
                                        {resumeData && resumeData.map((resume, index) => (
                                        <p className="card-content">{resume.sklContent}</p> 
                                        ))}   
                                    </ul>
                                    
                                </div>
                            </div>
                            </div>
                        
                    </div>
                </div>
    </div>
}