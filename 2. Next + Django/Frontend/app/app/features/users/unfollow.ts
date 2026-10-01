import { usersApi } from "@/app/lib/api/apiUsers";

export default async function follow(followerId: string, followedId: string) {

   try {
      const response = await usersApi.unfollow(followerId, followedId);

      console.log(response.data);

   } catch (error: any) {
      throw new Error(`Failed to fetch chats ${error.message}`);
   }
}
