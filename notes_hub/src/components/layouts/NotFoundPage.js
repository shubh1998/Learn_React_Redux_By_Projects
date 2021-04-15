import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container py-3">
      <p>Not Found</p>
      <br />
      <Link to="/">Goto Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
