import { usersApi } from "@/app/lib/api/apiUsers";

export default async function getChats (userId: string) {

   try {
      const response = await usersApi.getChats(userId);

      console.log(response.data);
   } catch (error: any) {
      throw new Error(`Failed to fetch chats ${error.message}`);
   }

}
