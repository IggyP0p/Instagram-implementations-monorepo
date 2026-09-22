import ProfileIcon from "./ProfileIcon";

export default function StoriesTray() {
   return (
      <div className="flex flex-row bg-white w-126 h-auto p-6 mt-6 mx-6 gap-2 overflow-hidden border border-gray-300 rounded-xl shadow-lg">
         <ProfileIcon/>
         <ProfileIcon/>
         <ProfileIcon/>
         <ProfileIcon/>
         <ProfileIcon/>
         <ProfileIcon/>
      </div>
   );
}
