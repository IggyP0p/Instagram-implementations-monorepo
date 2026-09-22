"use client"

import Post from "@/app/components/Post"
import StoriesTray from "@/app/components/StoriesTray"
import SuggestionsContainer from "@/app/components/SuggestionsContainer"
import ProfileIcon from "@/app/components/ProfileIcon"
import Button from "@/app/components/Button"


export default function Home() {
   return (
      <div className="flex flex-1 flex-row min-h-screen ml-66 justify-center bg-[#F8F8F8]">
         <div className="flex flex-col items-center">
            <StoriesTray />
            <Post />
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
