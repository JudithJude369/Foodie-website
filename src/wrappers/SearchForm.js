import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  place-content: center;

  .title {
    margin-bottom: 0.9rem;
    font-weight: 700;
    color: var(--pepper-red);
  }
  .input-wrapper {
    width: 100%;
    position: relative;
    margin-bottom: 1.5rem;
  }

  .input {
    width: 100%;
    position: relative;
    border: 3px solid grey;
    cursor: pointer;
    border-radius: 12px;
    color: black;
    padding: 0.6rem 2rem;
  }

  .search-icon {
    position: absolute;
    top: 30%;
    left: 90%;
    right: 0;
    transition: none;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    .search-icon {
      left: 94%;
    }
  }
`;

export default Wrapper;
