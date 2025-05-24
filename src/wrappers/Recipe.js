import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0.9rem;

  .flex {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  header h3 {
    margin: 0.8rem 0;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .img {
    height: 30rem;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    border-radius: 0.25rem;
  }

  .img:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .ing-text {
    padding: 0.6rem;
  }

  .ing-text h3 {
    font-weight: 800;
  }
  .ing-text li {
    list-style: inside;
    margin-top: 0.5rem;
  }

  .instruction-text {
    padding: 0.6rem;
  }

  .instruction-text h5 {
    font-weight: 900;
  }
  .instruction-text p {
    margin: 0.9rem 0;
    line-height: 1.5;
  }

  @media (min-width: 1024px) {
    .flex {
      flex-direction: row;
    }
  }
`;
export default Wrapper;
