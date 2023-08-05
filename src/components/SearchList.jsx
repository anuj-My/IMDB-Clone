import { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/SearchProvider";
import Card from "./Card";
import Search from "./Search";

const SearchListContainer = styled.div``;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  background: url("https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=600")
    center center/cover no-repeat;
`;

const MoviesContainer = styled.div`
  width: 95%;
  margin: auto;
  min-height: 50vh;
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 2.6rem;
  font-weight: 500;
  margin-top: 3rem;

  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.6rem;
  }
`;
const ListCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`;
const Message = styled.p`
  color: #e1e1e191;
  font-weight: 500;
  font-size: 4rem;

  text-align: center;

  @media screen and (max-width: 760px) {
    font-size: 2.7rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }
`;

const SearchList = () => {
  const { searchList, searchInput, onChangeHandler, submitHandler } =
    useContext(SearchContext);
  return (
    <SearchListContainer>
      <Banner>
        <Search
          onChangeHandler={onChangeHandler}
          submitHandler={submitHandler}
          searchInput={searchInput}
        />
      </Banner>
      <MoviesContainer>
        <Title>Search Results For: {searchInput}</Title>
        {searchList === null && <Message>Please Search a Movie</Message>}

        {searchList && (
          <ListCards>
            {searchList &&
              searchList.map((movie) => {
                return <Card movie={movie} key={movie.id} />;
              })}
          </ListCards>
        )}
      </MoviesContainer>
    </SearchListContainer>
  );
};

export default SearchList;
