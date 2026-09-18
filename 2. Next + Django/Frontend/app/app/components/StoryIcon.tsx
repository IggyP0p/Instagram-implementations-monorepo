import Image from "next/image";

export default function StoryIcon({circleSize = 19, collapsedName = false, textBold = false}) {
   return (
      <div className={`flex items-center justify-between ${collapsedName == true ? "flex-row gap-4" : "flex-col"}`}>
         <div className={`bg-linear-to-tr from-instagram-yellow via-instagram-red to-instagram-purple rounded-full
            flex items-center justify-center w-${circleSize} h-${circleSize}`}>
            <div className={`bg-white w-${circleSize - 1} h-${circleSize - 1} rounded-full flex items-center justify-center`}>
               <Image
                  src="/default_profile_pic.png"
                  alt=""
                  width={100}
                  height={100}
               />
            </div>
         </div>
         <span className={`text-sm ${textBold == true ? "font-bold" : ""}`}>Username</span>
      </div>
   );
}
