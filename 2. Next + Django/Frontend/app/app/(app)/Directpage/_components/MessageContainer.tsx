import Button from "@/app/components/Button";
import { ArrowDown, EditBox, HeartIcon, SmilingFaceIcon, AlertIcon, PhoneIcon, VideoIcon, ImageIcon } from "@/app/components/Icons";
import ProfileIcon from "@/app/components/ProfileIcon";
import UserCard from "./UserCard";

interface MessageContainerProps {
   usuario: string,
}

export default function MessageContainer({
   usuario = "lore",
}: MessageContainerProps) {
   return (
      // General Container
      <div className="bg-white border border-gray-300 w-7xl h-208 flex flex-row">
         {/* left-side */}
         <div className="border-r border-r-gray-300 w-md">
            {/* top container: username, buttons */}
            <div className="flex flex-row items-center justify-center p-6
               border-b border-b-gray-300 gap-2"
            >
               <span className="text-xl font-bold ml-40">{usuario}</span>
               <ArrowDown />
               <div className="ml-auto"> <EditBox /> </div>
            </div>
            {/* main Buttons: PRIMARY, GENERAL */}
            <div className="flex flex-row gap-1 border-b border-b-gray-300">
               <Button variant="containerAct" size="lg">PRIMARY</Button>
               <Button variant="containerInact" size="lg">GENERAL</Button>
            </div>
            {/* Users Dialogues container */}
            <div className="flex flex-col gap-1 py-2">
               <UserCard active={true} />
               <UserCard active={false} />
               <UserCard active={false}/>
            </div>
         </div>
         {/* right-side */}
         <div className="flex flex-1 flex-col w-full h-full">
            {/* top container: username, buttons */}
            <div className="flex flex-row items-center justify-center p-6
               border-b border-b-gray-300 gap-2 h-19.25"
            >
               <ProfileIcon circleSize={50} hasReels={false} hasTitle={false} />
               <div className="flex flex-col">
                  <span className="text-lg font-bold">{usuario}</span>
                  <span className="text-sm text-gray-400">last time seen</span>
               </div>
               <div className="flex flex-row gap-4 ml-auto">
                  <PhoneIcon />
                  <VideoIcon />
                  <AlertIcon />
               </div>
            </div>
            {/* messages container: message input, messages screen */}
            <div className="flex flex-1 w-full h-full px-4 my-6 overflow-hidden">
               {/* message input */}
               <div className="flex flex-row items-center gap-4 px-4 py-1 border border-gray-400 rounded-4xl w-full mt-auto">
                  <SmilingFaceIcon/>
                  <input
                     className="min-h-12 max-h-60 w-full resize-y text-[16px] text-black px-2 rounded-2xl border border-none focus:text-black focus:border  focus:border-blue-400 overflow-y-auto overflow-x-hidden wrap-break-word whitespace-pre-wrap"
                     placeholder="Message..."
                  />
                  <ImageIcon/>
                  <HeartIcon/>
               </div>
            </div>
         </div>
      </div>
   );
}
