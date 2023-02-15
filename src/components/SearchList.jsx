import styled from "styled-components";
import Card from "./Card";

const SearchListContainer = styled.div`
  width: 83%;
  padding-top: 11rem;
  margin: auto;
  min-height: 100vh;
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 3.2rem;
  text-align: center;
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
  height: 75vh;
  justify-content: center;
  align-items: center;
`;

const SearchList = ({ searchList, searchInput }) => {
  return (
    <SearchListContainer>
      <Title>Search Results For: {searchInput}</Title>
      {searchInput === "" && <Message>Please Search a Movie</Message>}

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
