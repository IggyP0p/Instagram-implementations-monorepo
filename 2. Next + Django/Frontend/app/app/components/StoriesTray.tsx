import StoryIcon from "./StoryIcon";

export default function StoriesTray() {
   return (
      <div className="flex flex-row bg-white w-126 h-auto p-6 m-6 gap-2 overflow-hidden border border-gray-300 rounded-xl shadow-lg">
         <StoryIcon/>
         <StoryIcon/>
         <StoryIcon/>
         <StoryIcon/>
         <StoryIcon/>
         <StoryIcon/>
      </div>
   );
}
