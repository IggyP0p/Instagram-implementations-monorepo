import { ArrowDown, ArrowUp } from "@/app/components/Icons"
import ProfileIcon from "@/app/components/ProfileIcon";
import PhoneScreen from "@/app/components/PhoneScreen";

interface ReelspageProps {
   user?: string,
   description?: string,
}
export default function Reelspage({
   user = "a",
   description = "Lorem ipsum assum siprum"
}: ReelspageProps) {
   return (
      <div className="flex flex-1 flex-row min-h-screen ml-66 px-12 items-center justify-center bg-[#F8F8F8]">
         <div className="p-6 ml-66 mt-auto mb-12 w-66">
            <ProfileIcon circleSize={70} collapsedName={true} hasReels={false} hasSubtitle={true} />
            <span>{description}</span>
         </div>
         <PhoneScreen />
         <div className="flex flex-col gap-6 ml-auto">
            <ArrowUp thisSize={56} classN="pb-2 bg-gray-300 rounded-full"/>
            <ArrowDown thisSize={56} classN="pt-2 bg-gray-300 rounded-full"/>
         </div>
      </div>
   );
}
