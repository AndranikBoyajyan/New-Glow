import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Error 404 Page not found</h2>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
