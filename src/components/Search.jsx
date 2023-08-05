import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Form = styled.form`
  width: 80%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  border-radius: 6rem;
  padding: 4px 1.4rem;
  backdrop-filter: blur(4px) saturate(180%);
  margin: 8rem 0 0 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media screen and (max-width: 780px) {
    padding: 6px 1rem;
  }
`;

const Input = styled.input`
  background-color: transparent;
  flex: 1;
  border: 0;
  outline: none;
  padding: 6px 20px;
  height: 50px;
  font-size: 1.6rem;
  color: #131313;
  width: 100%;

  @media screen and (max-width: 780px) {
    padding: 1.8rem 1.4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 1.2rem 1rem;
    height: 40px;
  }

  &::placeholder {
    color: #131313;

    @media screen and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }
`;

const Button = styled.button`
  border: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #dc0000;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    width: 3rem;
    height: 3rem;
  }

  svg {
    font-size: 2rem;
    color: #fafafa;

    @media screen and (max-width: 780px) {
      font-size: 1.8rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }
`;

const Search = ({ onChangeHandler, submitHandler, searchInput }) => {
  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="search"
        onChange={onChangeHandler}
        value={searchInput}
        placeholder="Search movies"
      />
      <Button type="submit">
        <BiSearchAlt />
      </Button>
    </Form>
  );
};

export default Search;
