import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import sanityClient from "../client"

export default function Post(){
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`).then((data) => setPost(data)).catch(console.error)
    }, [])
    return (
        <main className="">
            <section className="container mx-auto blog-section">
            <h1 className="welcome about-head resume-head blog-head">0.5 {" "}<span className="secondary">Blog Posts...</span></h1>
            <hr className="blog-rule"/>
               
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/"+post.slug.current} key={post}>
                        <span className="post-img block h-64 relative rounded shadow leading-snug bg-white border-l-8 boder-blue-400" key={index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounded-r object-cover absolute"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="post-tit text-gray-800 text-lg font-bold px-3 bg-4 bg-blue-700 text-blue-100 bg-opacity-75 rounded">{post.title}</h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}