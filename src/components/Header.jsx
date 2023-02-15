import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import Search from "./Search";
import Logo from "./Logo";

const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  display: grid;
  grid-template-columns: minmax(29%, 29%) minmax(59%, 59%) minmax(12%, 12%);
  gap: 4rem;
  align-items: center;
  padding: 0 5rem;
  position: fixed;
  z-index: 100;
  background-color: #1c1c1c;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  a {
    text-decoration: none;
    font-size: 2rem;
    color: white;
  }
`;
const HeaderRight = styled.div``;

const Header = ({ onChangeHandler }) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="movies/popular">Popular</Link>
        <Link to="movies/top_rated">Top Rated</Link>
        <Link to="movies/upcoming">Upcoming</Link>
      </HeaderLeft>
      <Search onChangeHandler={onChangeHandler} />

      <HeaderRight>
        <VscAccount style={{ fontSize: "3rem" }} />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
