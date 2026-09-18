"use client"

import Post from "@/app/components/Post"
import StoriesTray from "@/app/components/StoriesTray"


export default function Home() {
   return (
      <div className="flex flex-1 flex-col min-h-screen ml-66 items-center bg-[#F8F8F8]">
         <StoriesTray />
         <Post />
      </div>
   )
}
