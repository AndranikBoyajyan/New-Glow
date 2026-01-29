import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";
import { useCallback, useEffect, useState } from "react";
import { getBlogPost } from "./service/getBlogCard";
import { getBlogViews } from "./service/getBlogViews";

export const BlogSinglePost = () => {
  const { slug } = useParams();

  const [blogPost, setBlogPost] = useState();
  const [viewsCount, setViewsCount] = useState(0);

  const title = slug?.replaceAll("-", " ");

  const getBlogCard = useCallback(async () => {
    const blogCard = await getBlogPost(slug ?? "");
    setBlogPost(blogCard);
  }, [slug]);

  const getViews = useCallback(async () => {
    const views = await getBlogViews();

    console.log({ views });

    setViewsCount(views);
  }, []);

  useEffect(() => {
    getBlogCard();
    getViews();
  }, [getBlogCard, getViews]);

  console.log({ slug, title, blogPost, viewsCount });

  return <SingleBlogPost title={title ?? ""} />;
};
