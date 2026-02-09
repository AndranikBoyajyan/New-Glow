import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";
import { useEffect, useState } from "react";
import type { BlogPost } from "./model";
import { getBlogPost } from "../../../service/endpoints/getBlogCard";
import { createBlogView } from "../../../service/endpoints/createView";

export const BlogSinglePost = () => {
  const { slug } = useParams();

  const [blogPost, setBlogPost] = useState<BlogPost>();

  useEffect(() => {
    getBlogPost(slug ?? "").then((res) => {
      setBlogPost(res);
      createBlogView(res.id);
    });
  }, [slug]);

  if (!blogPost) return null;

  return (
    <SingleBlogPost
      slug={slug ?? ""}
      id={blogPost.id}
      comments={blogPost.comments}
      viewCount={blogPost.viewCount}
      postLikeCount={blogPost.likeCount}
      isPostLiked={blogPost.isLiked}
      commentsCount={blogPost.commentsCount}
    />
  );
};
