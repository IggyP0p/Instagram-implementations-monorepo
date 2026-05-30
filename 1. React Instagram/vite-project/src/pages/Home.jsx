import Post from "../components/Post"
import { StoriesBar } from "../components/StoriesBar"
import Footer from "../components/Footer"
import { useState } from "react"

import '../css/home.css'

function Home() {
    
    const [searchQuery, setSearchQuery] = useState("");

    const posts = [
        { id: 1, title: "Jonny"},
        { id: 2, title: "Lucas"},
        { id: 3, title: "Edgar"}
    ]

    return (
        <div className="home-container">
            <div className="home">
                <StoriesBar/>
                
                <div className="posts-grid">
                    {posts.map((posts) => (
                        <Post name={posts.title} key={posts.id} time={"1h"} commentary={"lorem ipsum hasum ad ip dum asa volatile sumptum lorem ipsum hasum ad ip dum asa volatile sumptum lorem ipsum hasum ad ip dum asa volatile sumptum lorem ipsum hasum ad ip dum asa volatile sumptum"}/>
                    ))}
                </div>
                <div className="profiles-grid">

                </div>

            </div>

            <Footer/>
        </div>
        
    )
}

export default Home