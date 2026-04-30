import Post from "../components/Post"
import { StoriesBar } from "../components/StoriesBar"
import { useState } from "react"

import '../css/home.css'

function Home() {
    
    
    const [searchQuery, setSearchQuery] = useState("");

    const posts = [
        { id: 1, title: "Jonny"},
        { id: 2, title: "Lucas"},
        { id: 3, title: "Edgar"}
    ]
/* 
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }*/

    return (
        <div className="home">
            <StoriesBar/>
            
            <div className="posts-grid">
                {posts.map((posts) => (
                    <Post comentario={posts.title} key={posts.id}/>
                ))}
            </div>
            <div className="profiles-grid">

            </div>

        </div>
    )
}

export default Home