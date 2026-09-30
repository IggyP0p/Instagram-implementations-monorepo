const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { UserAuthResponseType, UserRegisterRequest, UserLoginRequest } from "@/app/types/users";

export const apiAuth = {

   async register(data: UserRegisterRequest): Promise<UserAuthResponseType> {
      const response = await fetch(`${API_URL}/user/register/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         throw new Error('Invalid form data');
      }

      return response.json();
   },

   async login(data: UserLoginRequest): Promise<UserAuthResponseType> {
      const response = await fetch(`${API_URL}/user/login/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data)
      });

      if (!response.ok) {
         throw new Error('Invalid login credentials');
      }

      return response.json();
   },

};
