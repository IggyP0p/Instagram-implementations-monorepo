import ProfileIcon from "@/app/components/ProfileIcon";

interface UserCardProps {
   active: boolean,
}

export default function UserCard({
   active,
}: UserCardProps) {
   return (
      <div className={`${active ? "bg-gray-200" : ""} w-full h-20 px-6 py-2
         flex items-center cursor-pointer hover:bg-gray-200`}>
         <ProfileIcon circleSize={80} textBold={true} collapsedName={true} hasReels={false} />
      </div>
   );
}
