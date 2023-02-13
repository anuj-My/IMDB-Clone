import styled from "styled-components";
import Card from "./Card";

const SearchListContainer = styled.div`
  width: 83%;
  padding-top: 11rem;
  margin: auto;
`;
const Title = styled.h2`
  margin-bottom: 2rem;
`;
const ListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 20rem);
  gap: 1rem;
`;

const SearchList = ({ searchList, searchInput }) => {
  return (
    <SearchListContainer>
      <Title>Search Results For: {searchInput}</Title>
      <ListCards>
        {searchList &&
          searchList.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
      </ListCards>
    </SearchListContainer>
  );
};

export default SearchList;
