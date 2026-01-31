import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";
import { useCallback, useEffect, useState } from "react";
import { getBlogPost } from "./service/getBlogCard";
import { getBlogViews } from "./service/getBlogViews";
import { createBlogViews } from "./service/createView";

// stex inch graca popoxman entaka code a

export const BlogSinglePost = () => {
  const { slug } = useParams();

  const [blogPost, setBlogPost] = useState();
  const [viewsCount, setViewsCount] = useState(0);
  const [createdView, setCreatedView] = useState();

  const title = slug?.replaceAll("-", " ");

  const getBlogCard = useCallback(async () => {
    const blogCard = await getBlogPost(slug ?? "");
    setBlogPost(blogCard);
  }, [slug]);

  const getViews = useCallback(async () => {
    const views = await getBlogViews(slug ?? "");

    setViewsCount(views);
  }, [slug]);

  const createViews = useCallback(async () => {
    const view = await createBlogViews(slug ?? "");

    setCreatedView(view);
  }, [slug]);

  useEffect(() => {
    getBlogCard();
    getViews();
    createViews();
  }, [getBlogCard, getViews, createViews]);

  console.log({ slug, title, blogPost, viewsCount, createdView });

  return <SingleBlogPost title={title ?? ""} />;
};
