import MessageContainer from "./_components/MessageContainer";

export default function Directpage() {
   return (
      <div className="flex flex-1 flex-row overflow-hidden min-h-screen ml-66 items-center justify-center bg-[#F8F8F8]">
         <div>
            <MessageContainer usuario="lore"/>
         </div>
      </div>
   );
}
