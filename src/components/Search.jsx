import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  padding: 1.6rem 2rem;
  font-weight: bold;
  background-color: #00000082;
  border: none;
  color: white;

  @media screen and (max-width: 750px) {
    padding: 1rem 1.4rem;

    &::placeholder {
      font-size: 1.4rem;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 1rem;
  }

  &:focus {
    outline-color: red;
  }
`;

const Search = ({ onChangeHandler, submitHandler, searchInput }) => {
  return (
    <Container>
      <Link to={`search`}>
        <Form onSubmit={submitHandler}>
          <Input
            type="search"
            onChange={onChangeHandler}
            value={searchInput}
            placeholder="Search movies"
          />
        </Form>
      </Link>
    </Container>
  );
};

export default Search;
