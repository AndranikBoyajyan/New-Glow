import { useParams } from "react-router";
import SingleBlogPost from "../../../features/SingleBlogPost";

export const BlogSinglePost = () => {
  const { id } = useParams();

  return <SingleBlogPost id={Number(id)} />;
};
