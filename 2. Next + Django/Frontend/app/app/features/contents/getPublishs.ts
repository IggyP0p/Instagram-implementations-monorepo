import { contentsApi } from "@/app/lib/api/apiContents";
import { PostData } from "@/app/types/contents";

export default async function getPublish(type: string = "post"): Promise<PostData[]> {
   try {
      const rawData = await contentsApi.getPublish(type);

      if (!Array.isArray(rawData)) {
         return [];
      }

      const formattedPosts: PostData[] = rawData.map((item: any) => ({
         id: item.id,
         imageUrl: item.contentUrl || "/image_not_found.jpeg",
         description: item.description || "",
         username: item.user?.username || "User",
         createdAt: item.createdAt
            ? new Date(item.createdAt).toLocaleDateString("pt-BR")
            : "recentemente",
         likes: item.likes || 0,
         commentsCount: item.commentsCount || 0,
      }));

      return formattedPosts;
   } catch (error: unknown) {
      console.error("Error in getPublish feature:", error);

      const message = error instanceof Error ? error.message : "Failed to load publications";
      throw new Error(message);
   }
}
