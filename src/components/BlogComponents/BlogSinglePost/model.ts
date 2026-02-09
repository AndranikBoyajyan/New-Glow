import type { Comment } from "../../../features/SingleBlogPost/model";

export interface BlogPost {
  id: number;
  slug: string;
  comments: Comment[];
  viewCount: number;
  likeCount: number;
  commentsCount: number;
  isLiked: boolean;
}
