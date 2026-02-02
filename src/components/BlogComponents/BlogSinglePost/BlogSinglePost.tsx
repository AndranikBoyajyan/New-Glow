import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";
import { createBlogView } from "./service/createView";
import { useCallback, useEffect } from "react";
// import { getBlogPost } from "./service/getBlogCard";

export const BlogSinglePost = () => {
  const { slug } = useParams();

  // const [blogPost, setBlogPost] = useState();
  // const [createdView, setCreatedView] = useState();

  // const getBlogCard = useCallback(async () => {
  //   const blogCard = await getBlogPost(slug ?? "");
  //   setBlogPost(blogCard);
  // }, [slug]);

  const createViews = useCallback(async () => {
    await createBlogView(slug ?? "");
  }, [slug]);

  useEffect(() => {
    createViews();
  }, [createViews]);

  return <SingleBlogPost slug={slug ?? ""} />;
};
