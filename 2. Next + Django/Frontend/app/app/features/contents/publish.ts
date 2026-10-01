import { contentsApi } from "@/app/lib/api/apiContents";

export default async function publish(data: FormData) {
   try {
      const token = typeof window !== "undefined"
         ? new URLSearchParams(document.cookie.replace(/;\s*/g, "&")).get("token")
         : null;

      if (!token) {
         throw new Error("Token de autenticação não encontrado.");
      }

      const response = await contentsApi.publishContent(data, token);

      return response;
   } catch (error: any) {
      console.error("Error in publish:", error);
      throw new Error(error.message || "Failed to publish content");
   }
}
