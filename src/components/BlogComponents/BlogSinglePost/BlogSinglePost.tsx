import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";
import { useEffect, useState } from "react";
import type { BlogPost } from "./model";
import { getBlogPost } from "../../../service/endpoints/getBlogCard";
import { createBlogView } from "../../../service/endpoints/createView";
import { getRecentPosts } from "../../../service/endpoints/getRecentPosts";
import type { CardType } from "../../../types/global.types";

export const BlogSinglePost = () => {
  const { slug } = useParams();

  const [blogPost, setBlogPost] = useState<BlogPost>();
  const [recentPosts, setRecentPosts] = useState<CardType[]>([]);

  useEffect(() => {
    getBlogPost(slug ?? "").then((res) => {
      setBlogPost(res);
      createBlogView(res.id);
      getRecentPosts(res.id).then((res) => setRecentPosts(res));
    });
  }, [slug]);

  if (!blogPost) return null;

  return (
    <SingleBlogPost
      id={blogPost.id}
      comments={blogPost.comments}
      viewCount={blogPost.viewCount}
      postLikeCount={blogPost.likeCount}
      isPostLiked={blogPost.isLiked}
      commentsCount={blogPost.commentsCount}
      recentPosts={recentPosts}
    />
  );
};
