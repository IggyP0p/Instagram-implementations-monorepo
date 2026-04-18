import Post from "../components/Post"

function Home() {
    const posts = [
        { id: 1, title: "Jonny"},
        { id: 2, title: "Lucas"},
        { id: 3, title: "Edgar"}
    ]

    const handleSearch = () => {
        alert("Searched")
    }

    return (
        <div className="home">
            <form 
                className="search-bar"
                onSubmit={handleSearch}
            >
                <input type="text" placeholder="Search" className="search-input"/>
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