export interface Form {
  comment: string;
}

export interface Comment {
  id: number;
  user_id: number;
  blog_id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}
