import { UserAuthResponseType, UserLoginRequest } from "@/app/types/users";
import { apiAuth } from "@/app/lib/api/apiAuth";
import { isValid } from "@/app/lib/validate";


export interface LoginResult {
   success: boolean;
   error?: boolean;
   message?: string;
   data?: UserAuthResponseType;
};

export default async function login(formData: Record<string, any>): Promise<LoginResult> {

   const data = Object.fromEntries(formData.entries());

   const passwordInvalid = !isValid.password(String(data.password));

   if (passwordInvalid) {
      return {
         success: false,
         error: true,
      };
   }

   const payload: UserLoginRequest = {
      login_data: String(data.loginKey),
      password: String(data.password),
   }

   try {
      const response = await apiAuth.login(payload);
      return {
         success: true,
         data: response,
      }
   } catch (error: any) {
      return {
         success: false,
         error: true,
         message: error.message,
      }
   }

}
