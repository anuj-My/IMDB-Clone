import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { MovieListContext } from "../context/MovieListProvider";
import Card from "./Card";

const MovieListContainer = styled.div`
  max-width: 95%;
  margin: auto;
  min-height: 100vh;
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  font-weight: 500;
  font-size: 3.4rem;
  letter-spacing: 3px;

  @media screen and (max-width: 760px) {
    font-size: 2.6rem;
  }
`;
const ListCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`;

const MoviesList = () => {
  const key = process.env.REACT_APP_API_KEY;
  const { movieList, setMovieList } = useContext(MovieListContext);
  const { type } = useParams();

  const getMoviesData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=${key}&language=en-US`
      );

      setMovieList(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoviesData();
    // eslint-disable-next-line
  }, [type]);

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
