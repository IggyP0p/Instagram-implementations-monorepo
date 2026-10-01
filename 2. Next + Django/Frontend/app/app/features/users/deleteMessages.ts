import { usersApi } from "@/app/lib/api/apiUsers";

export default async function sendMessage(userId: string, partnerId: string) {

   try {
      const response = await usersApi.deleteMessages(userId, partnerId);

      console.log(response.data);
   } catch (error: any) {
      throw new Error(`Failed to fetch chats ${error.message}`);
   }
}
