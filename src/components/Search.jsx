import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 2rem;
  border-radius: 3rem;
  padding: 0.3rem 1rem;
  font-weight: bold;

  &:focus {
    outline-color: red;
  }
`;

const Search = ({ onChangeHandler, searchInput }) => {
  return (
    <Container>
      <Link to={`search`}>
        <Input
          type="text"
          onChange={onChangeHandler}
          value={searchInput}
          placeholder="Search movies"
        />
      </Link>
    </Container>
  );
};

export default Search;
