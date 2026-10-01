export interface UserContentType {
   userId: string,
   type: string,
}

export interface UserCommentsType {
   source_user: string,
   source_content_type: string,
   text: string,
}

export interface PostData {
   id: string;
   imageUrl: string;
   description?: string;
   username: string;
   createdAt: string;
   commentsCount?: number;
}
