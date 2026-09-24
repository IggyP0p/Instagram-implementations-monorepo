import Image from "next/image";
import Button from "./Button";

interface TabCreateProps {
   onClose: () => void
}

export default function TabCreate({
   onClose
}: TabCreateProps) {
   return (
      <div
         className="fixed h-screen w-screen bg-transparent"
         onClick={() => onClose()}
      >
         <div className="h-full w-full bg-black/65 ml-66">
            <div
               className="flex flex-col items-center justify-center fixed border border-gray-200 rounded-2xl shadow-xl
               bg-white w-lg h-128 top-2/8 left-3/8"
               onClick={(e) => e.stopPropagation()}
            >

               <div className="flex items-center justify-center w-full h-auto border-b border-b-gray-300 p-2">
                  <span className="font-bold text-lg">Create new post</span>
               </div>
               <div className="flex flex-col items-center justify-center w-full h-full gap-6 p-6">
                  <Image
                     src="/pictures.jpeg"
                     alt="pictures"
                     width={150}
                     height={150}
                  />
                  <span className="text-xl">Drag photos and videos here</span>
                  <div>
                     <Button>Select from computer</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
