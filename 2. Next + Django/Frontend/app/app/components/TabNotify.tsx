import ProfileIcon from "./ProfileIcon";
import Button from "./Button";

interface TabNotifyProps {
   onClose: () => void
}

export default function TabNotify({
   onClose
}: TabNotifyProps) {
   return (
      <div
         className="absolute h-screen w-screen bg-transparent"
         onClick={() => onClose()}
      >
         <div
            className="fixed border border-gray-200 rounded-r-2xl shadow-xl
            left-17 bg-white w-md h-full"
            onClick={(e) => e.stopPropagation()}
         >
            {/* Upper container: Notify title */}
            <div className="flex flex-col py-6 px-6">
               <span className="text-3xl font-bold">Notifications</span>

               {/* Yesterday section */}
               <div className="border-b border-b-gray-300 py-6">
                  <span className="text-lg font-bold">Yesterday</span>
                  <div className="flex flex-row items-center py-2">

                     <ProfileIcon circleSize={55} hasReels={false} hasTitle={false} />

                     <div className="flex flex-col ml-4">
                        <span className="text-md font-bold">user</span>
                        <span className="text-sm">user info</span>
                     </div>

                     <div className="ml-auto">
                        <Button size="sm">Follow</Button>
                     </div>
                  </div>
               </div>

               {/* This week section */}
               <div className="border-b border-b-gray-300 py-6">
                  <span className="text-lg font-bold">This week</span>
                  <div className="flex flex-row items-center py-2">

                     <ProfileIcon circleSize={55} hasReels={false} hasTitle={false} />

                     <div className="flex flex-col ml-4">
                        <span className="text-md font-bold">user</span>
                        <span className="text-sm">user info</span>
                     </div>

                     <div className="ml-auto">
                        <Button size="sm">Follow</Button>
                     </div>
                  </div>

                  <div className="flex flex-row items-center py-2">

                     <ProfileIcon circleSize={55} hasReels={false} hasTitle={false} />

                     <div className="flex flex-col ml-4">
                        <span className="text-md">Follow lore, samuel, jujux._ and others. You have to see their photos.</span>
                     </div>
                  </div>

                  <div className="flex flex-row items-center py-2">

                     <ProfileIcon circleSize={55} hasReels={false} hasTitle={false} />

                     <div className="flex flex-col ml-4">
                        <span className="text-md">Follow lore, samuel, jujux._ and others. You have to see their photos.</span>
                     </div>
                  </div>
               </div>

               {/* Earlier section */}
               <div className="border-b border-b-gray-300 py-6">
                  <span className="text-lg font-bold">Earlier</span>

                  <div className="flex flex-row items-center py-2">

                     <ProfileIcon circleSize={55} hasReels={false} hasTitle={false} />

                     <div className="flex flex-col ml-4">
                        <span className="text-md">Follow lore, samuel, jujux._ and others. You have to see their photos.</span>
                     </div>
                  </div>

                  <div className="flex flex-row items-center py-2">

                     <ProfileIcon circleSize={55} hasReels={false} hasTitle={false} />

                     <div className="flex flex-col ml-4">
                        <span className="text-md">Follow lore, samuel, jujux._ and others. You have to see their photos.</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
