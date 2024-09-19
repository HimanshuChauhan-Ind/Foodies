import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Opps.. Something went wrong</h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
      <h2>
        <Link to="/">Return Home</Link>
      </h2>
    </div>
  );
};

export default Error;
