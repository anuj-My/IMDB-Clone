import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinkList from "./NavLinkList";
import { useRef, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: #1c1c1c;

  @media screen and (max-width: 750px) {
    height: 8rem;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: white;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: white;
  }

  @media screen and (max-width: 750px) {
    width: 20rem;
    height: 100vh;
    position: fixed;
    top: 0;
    right: -20rem;
    z-index: 100;
    flex-direction: column;
    justify-content: center;
    background-color: #1c1c1c;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const Btn = styled(HiMenuAlt1)`
  position: fixed;
  z-index: 111;
  top: 3.5rem;
  right: 3rem;
  font-size: 2.5rem;
  cursor: pointer;

  @media screen and (min-width: 750px) {
    display: none;
  }

  @media screen and (max-width: 750px) {
    top: 2.8rem;
  }

  @media screen and (max-width: 550px) {
    right: 1rem;
  }
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();
  const el = menuRef?.current;

  if (toggle) {
    el.style.right = `0`;
  } else {
    if (el) el.style.right = `-20rem`;
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLeft ref={menuRef}>
        <NavLinkList />
      </HeaderLeft>
      <Btn onClick={() => setToggle(!toggle)} />
    </HeaderContainer>
  );
};

export default Header;
