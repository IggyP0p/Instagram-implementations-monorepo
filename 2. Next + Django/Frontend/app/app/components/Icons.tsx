import {
   Search,
   Heart,
   MessageCircle,
   PlusSquare,
   User,
   Menu,
   ChevronLeft,
   ChevronDown,
   ChevronUp,
   CircleAlert,
   Ellipsis,
   Bookmark,
   Send,
   FaceSlightlySmiling,
   SquarePen,
   Phone,
   Video,
   Image as Imagem,
   X,
   CircleX,
   Clapperboard,
} from "lucide-react";

export function ReturnIcon() {

   return (
      <div
         className="p-2 cursor-pointer w-12 h-12 hover:bg-black/30 rounded-full flex items-center justify-center"
      >
         <ChevronLeft
            size={30}
         />
      </div>
   )
}

export function HomeIcon({isActive = false}) {
   return (
       <svg
         width={28}
         height={28}
         viewBox="0 0 24 24"
         fill={isActive ? "currentColor" : "none"}
         stroke="currentColor"
         strokeWidth={isActive ? "0" : "2"}
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         {/* Estrutura da casa sem a linha base na entrada da porta */}
         <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7H4a1 1 0 0 1-1-1v-9.5z" />
       </svg>
     );
}

export function SearchIcon() {
   return (
      <div>
         <Search
            size={28}
            strokeWidth={2}
         />
      </div>
   );
}

export function ReelsIcon({isActive = false}) {
   return (
      <div>
         <Clapperboard
            size={28}
            strokeWidth={2}
            fill={isActive ? "currentColor" : "none"}
         />
      </div>
   );
}

export function HeartIcon() {
   return (
      <div>
         <Heart
            size={28}
            strokeWidth={2}
         />
      </div>
   );
}

export function MessageCircleIcon({isActive = false}) {
   return (
      <div>
         <MessageCircle
            size={28}
            strokeWidth={2}
            fill={isActive ? "currentColor" : "none"}
         />
      </div>
   );
}

export function PlusSquareIcon() {
   return (
      <div>
         <PlusSquare
            size={28}
            strokeWidth={2}
         />
      </div>
   );
}

export function UserIcon() {
   return (
      <div>
         <User
            size={28}
            strokeWidth={2}
         />
      </div>
   );
}

export function MenuIcon() {
   return (
      <div>
         <Menu
            size={28}
            strokeWidth={2}
         />
      </div>
   );
}

export function AlertIcon() {
   return (
      <div>
         <CircleAlert
            size={28}
            strokeWidth={2}
         />
     </div>
   );
}

export function MoreIcon() {
   return (
      <Ellipsis
         size={28}
      />
   );
}

export function BookIcon() {
   return (
      <Bookmark
         size={28}
      />
   );
}

export function SendIcon() {
   return (
      <Send
         size={28}
      />
   );
}

export function SmilingFaceIcon(){
   return (
      <FaceSlightlySmiling
         size={28}
      />
   );
}

export function ArrowDown({thisSize = 28, classN = ""}) {
   return (
      <div className="cursor-pointer">
         <ChevronDown
            size={thisSize}
            className={classN}
         />
      </div>
   );
}

export function ArrowUp({thisSize = 28, classN = ""}) {
   return (
      <div className="cursor-pointer">
         <ChevronUp
            size={thisSize}
            className={classN}
         />
      </div>
   );
}

export function EditBox() {
   return (
      <div className="cursor-pointer">
         <SquarePen
            size={28}
         />
      </div>
   );
}

export function PhoneIcon() {
   return (
      <div className="cursor-pointer">
         <Phone
            size={28}
         />
      </div>
   );
}

export function VideoIcon() {
   return (
      <div className="cursor-pointer">
         <Video
            size={28}
         />
      </div>
   );
}

export function ImageIcon() {
   return (
      <div className="cursor-pointer">
         <Imagem
            size={28}
         />
      </div>
   );
}

export function CloseTabIcon() {
   return (
      <div className="cursor-pointer">
         <X
            size={22}
         />
      </div>
   );
}

export function CircleCloseTab() {
   return (
      <div className="cursor-pointer">
         <CircleX
            size={22}
            color="#A9A9A9"
         />
      </div>
   );
}
