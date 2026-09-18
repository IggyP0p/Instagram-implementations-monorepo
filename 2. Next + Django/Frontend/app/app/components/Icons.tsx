import {
   Search,
   Heart,
   MessageCircle,
   PlusSquare,
   User,
   Menu,
   ChevronLeft,
   CircleAlert,
   Ellipsis,
   Bookmark,
   Send,
   FaceSlightlySmiling,
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

export function CompassIcon({isActive = false}) {
   return (
       <svg
         width={28}
         height={28}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         {/* Camada 1: Círculo externo (sempre apenas linha de contorno) */}
         <circle cx="12" cy="12" r="10" />

         {/* Camada 2: Agulha da bússola (preenche de preto/currentColor se isActive for true) */}
         <polygon
           points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
           fill={isActive ? "currentColor" : "none"}
         />
       </svg>
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
