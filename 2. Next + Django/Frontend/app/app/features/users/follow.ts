import { FollowUser } from "@/app/types/users";
import { usersApi } from "@/app/lib/api/apiUsers";

export default async function follow(formData: Record<string, any>) {

   const data = Object.fromEntries(formData.entries());

   const payload: FollowUser = {
      following_user: String(data.follower),
      followed_user: String(data.followed),
   }

   try {
      const response = await usersApi.follow(payload);

      console.log(response.data);

   } catch (error: any) {
      throw new Error(`Failed to fetch chats ${error.message}`);
   }
}
