import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}


export default function SinglePost(){
    const [singlePost, setSinglePost] = useState(null);
    const {slug} = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0])).catch(console.error);
    }, [slug])

    if(!singlePost) return <div className="loading">Loading...</div>

    return (
        <main className="min-h-screen p-2 single-post">
            <article className="post container shadow-lg mx-auto rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-3">
                        <div className="post-title-bg">
                            <h1 className="cursive pot-title text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                            <div className="flex justify-center text-gray-800"><img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-10 h-10 rounded-full"/>
                            <p className="post-author cursive flex items-center pl-2 text-2xl">{singlePost.name}</p>
                            </div>
                            
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="post-img w-full object-cover rounded-t" style={{height: "300px"}} />
                    <p></p>
                </header>
                <div className="post-body px-4 lg:px-20 py-8 lg:py-15 prose lg:prose-xl max-w-full">
                    <BlockContent blocks={singlePost.body} projectId="x230fyvv" dataset="production"/>
                </div>
            </article>
        </main>
    )
}