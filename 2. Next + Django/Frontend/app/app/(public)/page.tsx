"use client"

import Image from "next/image";
import LoginContainer from "../components/LoginContainer";

export default function LoginPage() {
  return (
     <div className="flex flex-row items-center gap-12">
        <Image
           src="/celulares_pagina_login_semFundo.png"
           alt="Imagem"
           width={450}
           height={450}
        />
        <div className="flex flex-col items-center justify-center">
           <LoginContainer />
           <span className="mt-4">Get the app.</span>
           <Image
              src="/iOS_Android_Store_Link.png"
              alt="links"
              width={400}
              height={400}
           />
        </div>
     </div>
  );
}
