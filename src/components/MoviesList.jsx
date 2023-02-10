import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieListContainer = styled.div`
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
