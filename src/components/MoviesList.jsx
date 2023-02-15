import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieListContainer = styled.div`
  width: 83%;
  padding-top: 11rem;
  margin: auto;
  min-height: 100vh;
`;
const Title = styled.h2`
  margin-bottom: 3rem;
  font-weight: 500;
  font-size: 3.4rem;
  letter-spacing: 3px;

  text-align: center;
`;
const ListCards = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 20rem);
  grid-template-rows: masonry;
  justify-content: center;
`;

const MoviesList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  const getMoviesData = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=329687fabc3ae889caf2b760dd47d231&language=en-US
      `);

      setMovieList(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, [type]);

  return (
    <MovieListContainer>
      <Title>{(type ? type : "popular").toUpperCase()}</Title>
      <ListCards>
        {movieList &&
          movieList.map((movie) => {
            return <Card movie={movie} key={movie.id} />;
          })}
      </ListCards>
    </MovieListContainer>
  );
};

export default MoviesList;
