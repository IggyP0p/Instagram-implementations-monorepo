import Button from "@/app/components/Button";
import ProfileIcon from "@/app/components/ProfileIcon";

interface SuggestionsContainerProps {
   usuario?: string,
}

export default function SuggestionsContainer({
   usuario = "",
} : SuggestionsContainerProps) {
   return (
      <div className="flex flex-col gap-2.5 mt-6">
         <div className="flex flex-row justify-between text-sm">
            <span className="text-gray-500 font-bold">Suggestions For You</span>
            <Button variant="unstyled" size="none">
               See All
            </Button>
         </div>

         <div className="flex flex-row justify-between">
            <ProfileIcon circleSize={50} hasReels={false} collapsedName={true} textBold={true} hasSubtitle={true}/>
            <Button variant="simple" size="none">
               Follow {usuario}
            </Button>
         </div>

         <div className="flex flex-row justify-between">
            <ProfileIcon circleSize={50} hasReels={false} collapsedName={true} textBold={true} hasSubtitle={true}/>
            <Button variant="simple" size="none">
               Follow {usuario}
            </Button>
         </div>

         <div className="flex flex-row justify-between">
            <ProfileIcon circleSize={50} hasReels={false} collapsedName={true} textBold={true} hasSubtitle={true}/>
            <Button variant="simple" size="none">
               Follow {usuario}
            </Button>
         </div>

         <div className="flex flex-row justify-between">
            <ProfileIcon circleSize={50} hasReels={false} collapsedName={true} textBold={true} hasSubtitle={true}/>
            <Button variant="simple" size="none">
               Follow {usuario}
            </Button>
         </div>
     </div>
   );
}
