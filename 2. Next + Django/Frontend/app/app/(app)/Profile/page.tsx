import ProfileIcon from "@/app/components/ProfileIcon";
import Button from "@/app/components/Button";
import { ConfigIcon } from "@/app/components/Icons";
import Image from "next/image";

const userButtonStyle = "inline-flex items-center justify-center px-4 py-2.5 w-full rounded-lg font-bold bg-gray-600 text-white hover:bg-gray-400 hover:shadow-md"

const photosButtonStyleAct = "text-black font-semibold border-t-2 border-t-black"
const photosButtonStyleInact = "text-gray-400 font-semibold border-t-2 border-t-transparent hover:text-gray-600 hover:border-t-gray-600 transition-colors"

const imageCoverStyle = "relative h-[38dvh] aspect-14/16 w-auto rounded-sm overflow-hidden"

interface ProfilepageProps {
   user?: string,
   description?: string,
   postsNumber?: number,
   followersNumber?: number,
   followingNumber?: number,
}

export default function Profilepage({
   user = "username",
   description = "lorem ipsum asum dev tos lorem ipsum asum dev tos lorem ipsum asum dev tos",
   postsNumber = 0,
   followersNumber = 0,
   followingNumber = 0,
}: ProfilepageProps) {
   return (
      <div className="flex flex-col items-center min-h-screen w-dvh ml-66 mt-16 bg-white">
         {/* Upper text, with profile pic and user data */}
         <div className="flex flex-row gap-18">
            <ProfileIcon circleSize={200} hasTitle={false} hasReels={false}/>
            <div className="flex flex-col gap-4 w-sm">

               <div className="flex flex-row items-center gap-2">
                  <span className="text-2xl">{user}</span>
                  <Button
                     className={`${userButtonStyle}`}
                     variant="unstyled"
                     size="sm"
                  >Edit profile</Button>
                  <Button
                     className={`${userButtonStyle}`}
                     variant="unstyled"
                     size="sm"
                  >Ad tools</Button>
                  <ConfigIcon/>
               </div>

               <div className="flex flex-row gap-10">
                  <span><b>{postsNumber}</b> posts</span>
                  <span><b>{followersNumber}</b> followers</span>
                  <span><b>{followingNumber}</b> following</span>
               </div>
               <div className="flex flex-col">
                  <span>{user}</span>
                  <span>{description}</span>
               </div>
            </div>
         </div>

         {/* Bottom container: photos */}
         <div className="flex flex-col justify-center border-t border-t-gray-400 w-full mt-12">
            <div className="flex flex-row justify-center gap-16">
               <Button
                  className={`${photosButtonStyleAct}`}
                  variant="unstyled"
                  size="lg"
               >POSTS</Button>
               <Button
                  className={`${photosButtonStyleInact}`}
                  variant="unstyled"
                  size="lg"
               >REELS</Button>
               <Button
                  className={`${photosButtonStyleInact}`}
                  variant="unstyled"
                  size="lg"
               >SAVED</Button>
               <Button
                  className={`${photosButtonStyleInact}`}
                  variant="unstyled"
                  size="lg"
               >TAGGED</Button>
            </div>
            <div className="grid grid-cols-3 gap-1 items-center">

               <div className={`${imageCoverStyle}`}>
                  <Image
                     src="/image_not_found.jpeg"
                     alt="image not found"
                     fill
                     className="object-cover"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
