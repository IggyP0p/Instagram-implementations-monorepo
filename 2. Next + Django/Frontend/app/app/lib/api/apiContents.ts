const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { UserCommentsType } from "@/app/types/contents"


export const contentsApi = {

   async publishContent(formData: FormData, token?: string) {
      const response = await fetch(`${API_URL}/content/publish/`, {
         method: 'POST',
         headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
         },
         body: formData,
      });

      if (!response.ok) {
         const errorData = await response.json();
         throw new Error(errorData.detail || 'Failed to publish content');
      }

      return response.json();
   },


   async comment(data: UserCommentsType) {
      const response = await fetch(`${API_URL}/content/comment/`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (!response.ok){
         throw new Error('Failed to publish content');
      }

      return response.json();
   },


   async getPublish(type: string) {
      const token = typeof window !== "undefined"
         ? new URLSearchParams(document.cookie.replace(/;\s*/g, "&")).get("token")
         : null;

      const response = await fetch(`${API_URL}/content/publish/?type=${type}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
         },
      });

      if (!response.ok) {
         throw new Error('Failed to fetch content');
      }

      return response.json();
   },


   async getComments(contentId: string) {
      const response = await fetch(`${API_URL}/content/comment/${contentId}/`);

      if (!response.ok){
         throw new Error('Failed to publish content');
      }

      return response.json();
   },

   async deletePublish(contentId: string) {
      const response = await fetch(`${API_URL}/content/publish/${contentId}/`);

      if (!response.ok){
         throw new Error('Failed to publish content');
      }

      return response.json();
   }
}
