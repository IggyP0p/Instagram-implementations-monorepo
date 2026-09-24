"use client"

import { usePathname } from "next/navigation";
import { useState } from "react";
import TabSearch from "./TabSearch";
import TabNotify from "./TabNotify";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

import {
   HomeIcon,
   SearchIcon,
   CompassIcon,
   HeartIcon,
   MessageCircleIcon,
   PlusSquareIcon,
   UserIcon,
   MenuIcon,
} from "./Icons"

const liStyles = "hover:bg-black/15 rounded-lg m-2"
const linkStyles = "flex flex-row gap-5 items-center px-4 py-2 text-lg font-medium"
const buttonStyles = "flex flex-row w-full gap-5 items-center"
const spanStyles = "text-lg font-medium" // Suposed to be used only on button's spans - Link spans have their working on Links classNames

export default function Sidebar() {

   const pathname = usePathname();
   const [tabSearch, openTabSearch] = useState(false);
   const [tabNotify, openTabNotify] = useState(false);

   return (
      <aside className="fixed top-0 left-0 h-screen w-66 border-r border-r-gray-300 flex flex-col z-50">
         <Image
            src="/Instagram_nameLogo.png"
            alt="Logo Instagram"
            width={200}
            height={200}
            className="p-8 -ml-5 shrink-0"
         />

         <nav className="flex-1 flex flex-col pb-4">
            <ul className="list-none flex flex-col gap-1 h-full">
               <li className={`${liStyles}`}>
                  <Link
                     href="/Homepage"
                     className={`${linkStyles}`}
                  >
                     <HomeIcon isActive={pathname === "/Homepage" ? true : false} />
                     <span className={pathname === "/Homepage" ? "font-bold" : ""}>Home</span>
                  </Link>
               </li>
               <li className={`${liStyles}`}>
                  <Button
                     variant="unstyled"
                     className={`${buttonStyles}`}
                     onClick={() => openTabSearch(true)}
                  >
                     <SearchIcon />
                     <span className={`${spanStyles}`}>Search</span>
                  </Button>
               </li>
               <li className={`${liStyles}`}>
                  <Link
                     href="/Reels"
                     className={`${linkStyles}`}
                  >
                     <CompassIcon isActive={pathname === "/Reels" ? true : false}/>
                     <span className={pathname === "/Reels" ? "font-bold" : ""}>Explore</span>
                  </Link>
               </li>
               <li className={`${liStyles}`}>
                  <Link
                     href="/Directpage"
                     className={`${linkStyles}`}
                  >
                     <MessageCircleIcon isActive={pathname === "/Directpage" ? true : false}/>
                     <span className={pathname === "/Directpage" ? "font-bold" : ""}>Messages</span>
                  </Link>
               </li>
               <li className={`${liStyles}`}>
                  <Button
                     variant="unstyled"
                     className={`${buttonStyles}`}
                     onClick={() => openTabNotify(true)}
                  >
                     <HeartIcon/>
                     <span className={`${spanStyles}`}>Notifications</span>
                  </Button>
               </li>
               <li className={`${liStyles}`}>
                  <Button
                     variant="unstyled"
                     className={`${buttonStyles}`}
                  >
                     <PlusSquareIcon/>
                     <span className={`${spanStyles}`}>Create</span>
                  </Button>
               </li>
               <li className={`${liStyles}`}>
                  <Link
                     href="/Profile"
                     className={`${linkStyles}`}
                  >
                     <UserIcon/>
                     <span className={pathname === "/Profile" ? "font-bold" : ""}>Profile</span>
                  </Link>
               </li>

               {/* 3. O mt-auto agora empurra perfeitamente para o rodapé */}
               <li className={`${liStyles} mt-auto`}>
                  <Button
                     variant="unstyled"
                     className={`${buttonStyles}`}
                  >
                     <MenuIcon/>
                     <span className={`${spanStyles}`}>More</span>
                  </Button>
               </li>
            </ul>
         </nav>

         {tabSearch && (
            <TabSearch onClose={() => openTabSearch(false)}/>
         )}

         {tabNotify && (
            <TabNotify onClose={() => openTabNotify(false)}/>
         )}
      </aside>
   )
}
