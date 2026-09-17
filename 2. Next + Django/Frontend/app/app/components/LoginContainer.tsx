import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function LoginContainer() {
   return (
      <div className="flex flex-col items-center justify-center gap-2">
         <div className="flex flex-col items-center justify-center p-10 shadow-md w-sm h-auto gap-4 border rounded-sm">
            <Image
               src="/Instagram_nameLogo.png"
               alt="Instagram"
               width={200}
               height={100}
            />

            <input
               className="p-2.5 border rounded-sm w-full"
               type="text" placeholder="Phone number, username or email"
            />

            <input
               className="p-2.5 border rounded-sm w-full"
               type="password" placeholder="Password"
            />

            <Button variant="primary">
               Login
            </Button>

            <div className="flex items-center w-full my-4">
              <span className="flex-1 border-t border-gray-500"></span>
              <span className="px-3 text-sm text-gray-700">OU</span>
              <span className="flex-1 border-t border-gray-500"></span>
            </div>


            <span><Link href="/recuperar-senha" className="text-blue-500">forgot your password?</Link></span>
         </div>
         <div className="flex flex-col w-sm shadow-md border rounded-md items-center justify-center p-6">
            <span>Don&apos;t have an account? <Link href="/cadastrar" className="text-blue-500">Sign up</Link></span>
         </div>
      </div>
   );
};
