const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { FollowUser, SendMessage } from "@/app/types/users";
import { UserPatchRequest } from "@/app/types/users";

export const usersApi = {

   async follow(data: FollowUser) {
      const response = await fetch(`${API_URL}/user/following/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         throw new Error('Fail following user');
      }

      return response.json();
   },


   async sendMessage(data: SendMessage) {
      const response = await fetch(`${API_URL}/messages/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         throw new Error('Fail sending message');
      }

      return response.json();
   },


   async getUser(userId: string) {
      const response = await fetch(`${API_URL}/user/${userId}`, {
         next: { revalidate: 60 },
      });

      if (!response.ok) {
         throw new Error('Fail searching for user');
      }

      return response.json();
   },


   async getFollowers(userId: string) {
      const response = await fetch(`${API_URL}/user/following/${userId}/`);

      if (!response.ok) {
         throw new Error('Couldnt load followers');
      }
      return response.json();
   },


   async getChats(userId: string) {
      const response = await fetch(`${API_URL}/user/messages/${userId}/`);

      if (!response.ok) {
         throw new Error('Could not load messages');
      }

      return response.json();
   },


   async getMessages(userId: string, partnerId: string) {
      const response = await fetch(`${API_URL}/user/messages/${userId}/${partnerId}/chat/`);

      if (!response.ok) {
         throw new Error('Could not load messages');
      }

      return response.json();
   },


   async patchUserInfo(data: UserPatchRequest) {
      const response = await fetch(`${API_URL}/user/`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (!response.ok) {
         throw new Error('Fail following user');
      }

      return response.json();
   },


   async unfollow(followingId: string, followedId: string) {
      const response = await fetch(`${API_URL}/user/following/${followingId}/${followedId}/`);

      if (!response.ok) {
         throw new Error('Fail to unfollow user');
      }

      return response.json();
   },


   async deleteMessages(userId: string, partnerId: string) {
      const response = await fetch(`${API_URL}/user/messages/${userId}/${partnerId}/chat/`);

      if (!response.ok) {
         throw new Error('Fail to delete chat messages');
      }

      return response.json();
   }
}
