import { Link } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  width: 90rem;
  height: 5rem;
  font-size: 2rem;
  border-radius: 3rem;
  padding: 0.3rem 1rem;
  font-weight: bold;

  &:focus {
    outline-color: yellow;
  }
`;

const Search = ({ onChangeHandler, searchInput }) => {
  return (
    <div>
      <Link to={`search`}>
        <Input
          type="text"
          onChange={onChangeHandler}
          value={searchInput}
          placeholder="Search movies"
        />
      </Link>
    </div>
  );
};

export default Search;
