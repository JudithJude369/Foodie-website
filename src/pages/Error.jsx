import { Link, useRouteError } from "react-router-dom";
import errorImg from "@/assets/not-found.svg";
import Wrapper from "@/wrappers/Error";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={errorImg} alt="not found" />
        <h3>Ohh!</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>something went wrong</h3>
    </Wrapper>
  );
};

export default Error;
