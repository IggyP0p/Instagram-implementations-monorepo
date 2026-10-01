"use client"
import { PostData } from "@/app/types/contents"
import { useState, useEffect } from "react"
import Post from "./_components/Post"
import StoriesTray from "./_components/StoriesTray"
import SuggestionsContainer from "./_components/SuggestionsContainer"
import ProfileIcon from "@/app/components/ProfileIcon"
import Button from "@/app/components/Button"
import getPublish from "@/app/features/contents/getPublishs"


export default function Home() {
   const [posts, setPosts] = useState<PostData[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      async function fetchPosts() {
         try {
            setLoading(true);

            const data = await getPublish("post");
            setPosts(data);
         } catch (error: any) {
            console.error(`Failed to load posts: ${error}`);

         } finally {
            setLoading(false);
         }
      }

      fetchPosts();
   }, []);

   return (
      <div className="flex flex-1 flex-row min-h-screen ml-66 justify-center bg-[#F8F8F8]">
         <div className="flex flex-col items-center">
            <StoriesTray />

            {loading && (
               <div className="mt-8 text-gray-500 font-medium">
                  Carregando publicações...
               </div>
            )}

            {!loading && posts.length > 0 && (
               posts.map((post) => (
                  <Post
                     key={post.id}
                     imageUrl={post.imageUrl}
                     description={post.description}
                     username={post.username}
                     createdAt={post.createdAt}
                     commentsCount={post.commentsCount}
                  />
               ))
            )} : {
               <Post />
            }
         </div>

         <div className="flex flex-col w-80 mt-14 ml-3">
            <div className="flex flex-row justify-between">
               <ProfileIcon circleSize={70} collapsedName={true} hasReels={false} hasSubtitle={true} />
               <Button variant="simple" size="none">Switch</Button>
            </div>
            <SuggestionsContainer/>
            <span className="text-sm text-gray-400 mt-4">Educational Project. Made by Igor Barbosa. 2026.</span>
         </div>
      </div>
   )
}
