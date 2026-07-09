import Post from "../components/Post"
import { StoriesBar } from "../components/StoriesBar"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import api from "../hooks/api"

import '../css/home.css'

function Home() {

   const [posts, setPosts] = useState([]);
   const [loading, setLoading] = useState(true);

   //TODO: test this method.
   useEffect(() => {
      async function loadPosts() {
         try {
            const data = await api.getPosts();
            setPosts(data);
         } catch (error) {
            console.error("It was not possible to load posts: ", error);
         } finally {
            setLoading(false);
         }
      }

      loadPosts();
   }, []);

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
