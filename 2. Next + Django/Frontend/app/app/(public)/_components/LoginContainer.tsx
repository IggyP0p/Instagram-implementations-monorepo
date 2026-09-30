'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "@/app/components/Button";
import login from "@/app/features/auth/login";
import { LoginResult } from "@/app/features/auth/login";
import { useRouter } from "next/navigation";


export default function LoginContainer() {
   const router = useRouter();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [showError, setShowError] = useState(false);

   async function RequestLogin(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setIsSubmitting(true);

      const formData = new FormData(event.currentTarget);

      const response: LoginResult = await login(formData);

      if (response.error) setShowError(true);

      if (response.data?.tokens) {
         document.cookie = `token=${response.data?.tokens.access}; path=/; max-age=86400`;
         document.cookie = `refresh_token=${response.data?.tokens.refresh}; path=/; max-age=604800`;

         router.refresh();
      }

      setIsSubmitting(false);

      return;
   }

   return (
      <div className="flex flex-col items-center justify-center gap-2">
         <form onSubmit={RequestLogin} className="flex flex-col items-center justify-center p-10 shadow-md w-sm h-auto gap-4 border rounded-sm">
            <Image
               src="/Instagram_nameLogo.png"
               alt="Instagram"
               width={200}
               height={100}
            />

            <input
               className="p-2.5 border rounded-sm w-full"
               type="text" placeholder="Phone number, username or email"
               name="loginKey"
            />

            <input
               className="p-2.5 border rounded-sm w-full"
               type="password" placeholder="Password"
               name="password"
            />
            {showError && (
               <span className="text-red-500 font-bold flex flex-row items-center gap-2 text-sm">
                  Login or password wrong, please try again.
               </span>
            )}

            <Button
               variant="primary"
               type="submit"
               disabled={isSubmitting}
            >
               Login
            </Button>

            <div className="flex items-center w-full my-4">
              <span className="flex-1 border-t border-gray-500"></span>
              <span className="px-3 text-sm text-gray-700">OU</span>
              <span className="flex-1 border-t border-gray-500"></span>
            </div>


            <span><Link href="/recuperar-senha" className="text-blue-500">forgot your password?</Link></span>
         </form>
         <div className="flex flex-col w-sm shadow-md border rounded-md items-center justify-center p-6">
            <span>Don&apos;t have an account? <Link href="/cadastrar" className="text-blue-500">Sign up</Link></span>
         </div>
      </div>
   );
};
