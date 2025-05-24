import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Wrapper from "@/wrappers/Navbar";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    // set both to true
    setToggleMenu((prev) => !prev);
    setOpenMenu(!openMenu);
  };

  const handleClick = () => {
    // set both to false
    setToggleMenu(false);
    setOpenMenu(!openMenu);
  };

  return (
    <Wrapper>
      <article className="nav-center">
        <h2 className="logo">Foodie</h2>
        <div onClick={handleToggleMenu} className="icon">
          {toggleMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        {openMenu && (
          // mobilemenu
          <div className="menuMobile" onClick={handleClick}>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="nav-link">
              Newsletter
            </NavLink>
          </div>
        )}
        <div className="menuDesktop">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </article>
    </Wrapper>
  );
};

export default Navbar;
