import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 0.25rem;
  :hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  img {
    height: 15rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .details-container {
    padding: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
  p {
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
