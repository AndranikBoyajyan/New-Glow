import { useParams } from "react-router";

const useUrlParams = () => {
  const params = useParams();

  console.log({ params });

  return params;
};

export default useUrlParams;
