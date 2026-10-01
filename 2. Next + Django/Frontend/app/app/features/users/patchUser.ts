import { usersApi } from "@/app/lib/api/apiUsers";
import { UserPatchRequest } from "@/app/types/users";

export default async function getChats (formData: Record<string, any>) {

   const payload: Partial<UserPatchRequest> = {};

   for (const [key, value] of formData.entries()) {
      const stringValue = String(value).trim();

      if (stringValue !== "") {
         payload[key as keyof UserPatchRequest] = stringValue;
      }
   }

   try {
      const response = await usersApi.patchUserInfo(payload);

      console.log(response.data);
   } catch (error: any) {
      throw new Error(`Failed to fetch chats ${error.message}`);
   }

}
