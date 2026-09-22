import Button from "./Button";
import { formatter } from "../lib/formatter";
import { HeartIcon, MessageCircleIcon, SendIcon, BookIcon, MoreIcon, SmilingFaceIcon } from "./Icons";
import ProfileIcon from "./ProfileIcon";
import Image from "next/image";


const postDescription = formatter.postDescription("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");

export default function Post() {
   return (
      <div className="flex flex-col bg-white w-126 h-auto mb-6 mt-6 gap-2 overflow-hidden border border-gray-300 rounded-xl shadow-lg">

         {/* Upper element: user profile, name and options button */}
         <div className="flex flex-row justify-between items-center px-4 py-2 w-full">
            <ProfileIcon circleSize={50} collapsedName={true} textBold={true}/>
            <MoreIcon/>
         </div>

         {/* Image Container */}
         <div className="w-126 max-h-186 overflow-hidden">
            <Image
               src="/image_not_found.jpeg"
               alt=""
               width={800}
               height={800}
            />
         </div>

         {/* Post interactive buttons: Heart, comment, Send message and booking */}
         <div className="flex flex-row justify-between px-4 my-2">
            <div className="flex flex-row gap-4">

               <Button variant="unstyled" size="none">
                  <HeartIcon />
               </Button>

               <Button variant="unstyled" size="none">
                  <MessageCircleIcon />
               </Button>

               <Button variant="unstyled" size="none">
                  <SendIcon />
               </Button>
            </div>
            <div>
               <Button variant="unstyled" size="none">
                  <BookIcon />
               </Button>
            </div>
         </div>

         {/* User post description */}
         <div className="px-4 text-justify">
            <span className="font-bold mr-2">Username</span>
            <span>{postDescription}</span>
         </div>

         {/* Post data */}
         <div className="flex flex-col px-4 pb-4 text-gray-500">
            <span>View all 7 comments</span>
            <span>3 DAYS AGO</span>
         </div>

         {/* Comment elements: User input and post comment */}
         <div className="flex flex-row justify-between border-t border-t-gray-300 p-4">
            <div className="flex flex-row items-center gap-3">
               <Button variant="unstyled" size="none">
                  <SmilingFaceIcon />
               </Button>
               <input
                  type="text"
                  className="text-gray-500 p-2 w-full h-auto rounded-2xl focus:text-black focus:border  focus:border-blue-300"
                  placeholder="Add a comment"
               />
            </div>
            <Button variant="simple" size="none">
               <span>Post</span>
            </Button>
         </div>
      </div>
   );
}
