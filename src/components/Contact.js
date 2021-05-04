import React, {useEffect, useState} from "react"
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../client"
import dark from "../dark.jpg"
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

    function submit(e) {
        // e.preventDefault();
        alert('message sent');
      }

    if(!author) return <div className="loading">Loading...</div>

    return (
        <main className="resume-section">
            <h1 className="welcome about-head resume-head blog-head">0.6 {" "}<span className="secondary">Get In Touch...</span></h1>
            <hr className="blog-rule"/>
            
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3 className="head-contact-info">Contact Information</h3>
        <ul>
          <li><i class="fa fa-road secondary"></i> Amuwo Odofin, Lagos, Nigeria</li>
          <li><i class="fa fa-phone secondary"></i> 08135473741</li>
          <li><i class="fa fa-envelope secondary"></i> bolu4good@gmail.com</li>
          <li>
            <div className="the-socials contact-socials">
                <p>Follow Me</p>
                <a href="" className="fa fa-github icon secondary" ></a>
                <a href="" className="fa fa-instagram icon secondary"></a>
                <a href="" className="fa fa-linkedin icon secondary"></a>
            </div>
        </li>

          <a className="btn p-btn">Contact Me Now</a>

        </ul>
      </div>
      <div class="contact">
        <h3 className="head-contact">Send Me A Message</h3>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Name *</label>
            <input type="text" name="name" required/>
          </p>
          {/* <p>
            <label>Company</label>
            <input type="text" name="company" />
          </p> */}
          <p>
            <label>Email Address *</label>
            <input type="email" name="email" required/>
          </p>
          {/* <p>
            <label>Phone Number</label>
            <input type="text" name="phone" />
          </p> */}
          <p class="full">
            <label>Message *</label>
            <textarea name="message" rows="5" required></textarea>
          </p>
          <p class="full">
            <button onClick={submit}>Send{" "} <i className="fa fa-paper-plane"></i></button>
          </p>
        </form>
      </div>
    </div>
        </main>
    )
}