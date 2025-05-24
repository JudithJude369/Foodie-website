import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  a {
    color: darkblue;
    text-transform: capitalize;
    text-decoration: underline;
  }
`;

export default Wrapper;
