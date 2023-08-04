import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinkList from "./NavLinkList";
import { useRef, useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const HeaderContainer = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: #1c1c1c;
  transform: translateY(${({ scroll }) => (scroll ? 0 : -10)}rem);

  @media screen and (max-width: 750px) {
    height: 6rem;
    transform: translateY(${({ scroll }) => (scroll ? 0 : -8)}rem);
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
  top: 1.8rem;
  right: 3rem;
  font-size: 2.5rem;
  cursor: pointer;

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [onScroll, setOnScroll] = useState(true);
  const menuRef = useRef();
  const el = menuRef?.current;

  let lastScrollY = window.scrollY;

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setOnScroll(false);
    } else {
      setOnScroll(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  if (toggle) {
    el.style.right = `0`;
  } else {
    if (el) el.style.right = `-20rem`;
  }

  return (
    <HeaderContainer scroll={onScroll}>
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
