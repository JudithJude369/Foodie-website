import styled from "styled-components";

const Wrapper = styled.nav`
  background-color: var(--grey-50);

  .nav-center {
    position: relative;
    max-width: 1200px;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .icon {
    position: absolute;
    font-size: 2rem;
    border: transparent;
    top: -1.5rem;
    right: 0;
    padding: 2rem 1rem;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
  }
  .logo {
    color: var(--pepper-red);
    font-weight: 900;
    font-style: oblique 40deg;
    letter-spacing: 3px;
  }

  .menuDesktop {
    display: none;
  }

  .menuMobile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .menuMobile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
  }

  .nav-link {
    color: var(--grey-900);
  }
  .nav-link:hover {
    color: var(--pepper-red);
  }
  .active {
    color: var(--pepper-red);
  }

  @media (min-width: 1024px) {
    .icon {
      display: none;
    }
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .menuMobile {
      display: none;
    }

    .menuDesktop {
      display: flex;
      gap: 6rem;
      margin-left: auto;
    }
  }
`;

export default Wrapper;
