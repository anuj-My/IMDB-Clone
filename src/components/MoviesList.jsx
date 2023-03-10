import styled from "styled-components";
import Card from "./Card";

const MovieListContainer = styled.div`
  width: 83%;
  margin: auto;
  min-height: 100vh;

  @media screen and (max-width: 820px) {
    width: 98%;
  }
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  font-weight: 500;
  font-size: 3.4rem;
  letter-spacing: 3px;
  text-align: center;
  background-color: #4545452b;
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  padding: 2rem;

  @media screen and (max-width: 760px) {
    font-size: 2.6rem;
  }
`;
const ListCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 22rem);
  grid-template-rows: masonry;
  justify-content: center;
`;

const MoviesList = ({ movieList, type }) => {
  return (
    <MovieListContainer>
      <Title>{(type ? type : "popular").toUpperCase()}</Title>
      <ListCards>
        {movieList &&
          movieList.map((movie) => {
            return <Card movie={movie} key={movie?.id} />;
          })}
      </ListCards>
    </MovieListContainer>
  );
};

export default MoviesList;
