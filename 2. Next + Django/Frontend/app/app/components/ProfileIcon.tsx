import Image from "next/image";

interface ProfileIconProps {
   circleSize?: number;
   collapsedName?: boolean;
   textBold?: boolean;
   title?: string;
   hasTitle?: boolean;
   subtitle?: string;
   hasSubtitle?: boolean;
   hasReels?: boolean;
}

export default function ProfileIcon({
   circleSize = 75,
   collapsedName = false,
   textBold = false,
   title = "username",
   hasTitle = true,
   subtitle = "user.name",
   hasSubtitle = false,
   hasReels = true,
}: ProfileIconProps) {
   return (
      <div className={`flex items-center ${collapsedName ? "flex-row gap-4" : "flex-col"}`}>
         {/* Gradient border */}
         <div  style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
               className={`${hasReels ? "bg-linear-to-tr from-instagram-yellow via-instagram-red to-instagram-purple" : "bg-none"} rounded-full cursor-pointer
               p-0.5 flex items-center justify-center shrink-0`}
            >

            {/* White border */}
            <div className={`${hasReels ? "bg-white" : "bg-none"} rounded-full w-full h-full p-0 flex items-center justify-center`}>

               {/* Image Container */}
               <div className={"relative w-full h-full rounded-full overflow-hidden"}>
                  <Image
                     src="/default_profile_pic.png"
                     alt=""
                     fill
                     className="object-cover"
                  />
               </div>
            </div>
         </div>
         <div className="flex flex-col">
            {hasTitle && (<span className={`text-sm cursor-pointer ${textBold == true ? "font-bold" : ""}`}>{title}</span>)}
            {hasSubtitle && (<span className={`text-sm cursor-pointer text-gray-500`}>{subtitle}</span>)}
         </div>
      </div>
   );
}
