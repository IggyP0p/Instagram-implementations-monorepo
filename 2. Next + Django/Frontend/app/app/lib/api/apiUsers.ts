const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const usersApi = {

   async getUser(userId: string) {
      const response = await fetch(`${API_URL}/users/${userId}`, {
         next: { revalidate: 60 },
      });

      if (!response.ok) {
         throw new Error('Fail searching for user');
      }

      return response.json();
   },

}
