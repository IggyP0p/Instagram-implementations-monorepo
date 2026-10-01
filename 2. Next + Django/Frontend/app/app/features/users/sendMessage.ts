import { SendMessage } from "@/app/types/users";
import { usersApi } from "@/app/lib/api/apiUsers";

export default async function sendMessage(formData: Record<string, any>) {

   const data = Object.fromEntries(formData.entries());

   const payload: SendMessage = {
      user_sender: String(data.sender),
      user_receiver: String(data.receiver),
      content: String(data.content),
   }

   try {
      const response = await usersApi.sendMessage(payload);

      console.log(response.data);
   } catch (error: any) {
      throw new Error(`Failed to fetch chats ${error.message}`);
   }
}
