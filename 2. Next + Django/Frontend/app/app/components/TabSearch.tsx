import { CloseTabIcon, CircleCloseTab } from "./Icons";
import ProfileIcon from "./ProfileIcon";
import Button from "./Button";

interface SearchTabProps {
   onClose: () => void
}

export default function SearchTab({
   onClose
}: SearchTabProps) {
   return (
      <div
         className="fixed h-screen w-screen bg-transparent z-50"
         onClick={() => onClose()}
      >
         <div
            className="fixed border border-gray-200 rounded-r-2xl shadow-xl
            left-17 bg-white w-md h-full"
            onClick={(e) => e.stopPropagation()}
         >
            {/* Upper container: Search title, Search input */}
            <div className="border-b border-b-gray-300 py-6 px-6">
               <span className="text-3xl font-bold">Search</span>
               <div className="flex flex-row items-center bg-gray-200 rounded-lg w-full px-3 py-1.5 mt-12">
                  <input
                     type="text"
                     className="rounded-lg w-full text-lg text-black px-3 py-1.5"
                     placeholder="Search"
                  />
                  <CircleCloseTab/>
               </div>
            </div>
            {/* Bottom container: Recent accounts visited */}
            <div className="flex flex-col">
               <div className="flex flex-row justify-between px-6 py-2">
                  <span className=" text-black text-md font-bold">Recent</span>
                  <Button variant="simple" size="none">Clear all</Button>
               </div>
               <div className="flex flex-row items-center px-6 py-2">
                  <ProfileIcon circleSize={50} hasReels={false} hasTitle={false} />
                  <div className="flex flex-col ml-4">
                     <span className="text-md font-bold">user</span>
                     <span className="text-sm">user info</span>
                  </div>
                  <div className="ml-auto">
                     <CloseTabIcon/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
