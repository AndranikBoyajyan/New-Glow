import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";
import { createBlogView } from "./service/createView";
import { useEffect, useState } from "react";
import { getBlogPost } from "./service/getBlogCard";

export const BlogSinglePost = () => {
  const { slug } = useParams();

  const [blogPost, setBlogPost] = useState<{ id: number; slug: string }>();

  useEffect(() => {
    createBlogView(slug ?? "");
    getBlogPost(slug ?? "").then((res) => setBlogPost(res));
  }, [slug]);

  if (!blogPost) return null;

  return <SingleBlogPost slug={slug ?? ""} id={blogPost.id} />;
};
