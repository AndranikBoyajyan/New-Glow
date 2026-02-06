import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";
import { createBlogView } from "./service/createView";
import { useEffect, useState } from "react";
import { getBlogPost } from "./service/getBlogCard";
import type { BlogPost } from "./model";

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
    />
  );
};
