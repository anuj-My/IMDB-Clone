import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
`;
const Logo = styled.img`
  width: 9rem;
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

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <Logo src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png"></Logo>
        </Link>
        <Link to="movies/poplular">Popular</Link>
        <Link to="movies/top-rated">Top Rated</Link>
        <Link to="movies/upcoming">Upcoming</Link>
      </HeaderLeft>

      <HeaderRight>Right</HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
