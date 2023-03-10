import { useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/SearchProvider";
import Card from "./Card";
import Search from "./Search";

const SearchListContainer = styled.div`
  width: 83%;
  padding-top: 14rem;
  margin: auto;
  min-height: 100vh;
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 2.6rem;
  font-weight: 500;
  text-align: center;
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
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-template-rows: masonry;
  justify-content: center;
`;
const Message = styled.p`
  color: #e1e1e191;
  font-weight: 500;
  font-size: 4rem;
  display: grid;
  height: 55vh;
  justify-content: center;
  align-items: center;

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
      <Search
        onChangeHandler={onChangeHandler}
        submitHandler={submitHandler}
        searchInput={searchInput}
      />
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
    </SearchListContainer>
  );
};

export default SearchList;
