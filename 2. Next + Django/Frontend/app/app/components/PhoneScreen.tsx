import Image from "next/image";

interface PhoneScreenProps {
   source?: string,
}

export default function PhoneScreen({
   source = "/image_not_found.jpeg",
}: PhoneScreenProps) {
   return (
      <div className="relative h-[95dvh] aspect-9/16 w-auto rounded-xl shadow-xl overflow-hidden">
         <Image
            src={source}
            alt="Not Found"
            fill
            className="object-cover"
         />
     </div>
   );
}
