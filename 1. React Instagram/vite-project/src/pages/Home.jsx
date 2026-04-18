import Post from "../components/Post"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const posts = [
        { id: 1, title: "Jonny"},
        { id: 2, title: "Lucas"},
        { id: 3, title: "Edgar"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return (
        <div className="home">
            <form 
                className="search-bar"
                onSubmit={handleSearch}
            >
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-input"
                    value={searchQuery}
                    onInput={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="sidebar">

            </div>
            <div className="stories-bar">

            </div>
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