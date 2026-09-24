"use client"

import SignupForm from "../_components/SignupForm";
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
         <SignupForm/>
      </div>
   )
}
