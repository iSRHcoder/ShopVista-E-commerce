import { Link, useNavigate } from "react-router-dom";
import route from "./../routes/routes.json";
import { useEffect, useState } from "react";

const ErrorPage = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      navigate(route.HOME);
    }
  }, [timer, navigate]);

  return (
    <>
      <h1 className="text-danger">Error: 404 Page Not Found</h1>
      <p>
        please click the link to redirect to <Link to={route.HOME}>Home</Link>{" "}
        Page
      </p>
      <p>or, you will auto redirect to Home Page in {timer} sec</p>
    </>
  );
};

export default ErrorPage;
