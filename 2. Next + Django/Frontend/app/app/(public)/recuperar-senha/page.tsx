"use client"

import Button from "@/app/components/Button";
import { ReturnIcon } from "@/app/components/Icons";
import { useRouter } from "next/navigation";

export default function PaginaCadastro() {
   const router = useRouter();

   return (
      <div className="min-h-screen">
         <div
            className="relative top-2 right-4 mt-5 mb-2"
            onClick={() => router.back()}
         >
            <ReturnIcon />
         </div>
         <div className="flex flex-col gap-2">
            <span
               className="font-bold text-3xl"
            >
               Search your account.</span>
            <span>Insert your phone number, username or email.</span>
            <input
               className="p-2.5 border rounded-sm w-full"
               type="text" placeholder="Phone number, username or email"
            />
            <span>You can receive notifications through whatsapp and SMS for security purposes</span>
            <Button variant="primary">Continue</Button>
         </div>
      </div>
   )
}
