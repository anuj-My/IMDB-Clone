import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieListContainer = styled.div`
  width: 86%;
  padding-top: 11rem;
  margin: auto;
`;
const Title = styled.h2`
  margin-bottom: 2rem;
`;
const ListCards = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 20rem);
  gap: 2rem;
`;

const MoviesList = () => {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);

  const { type } = useParams();

  const getMoviesData = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${
        type && "popular"
      }?api_key=329687fabc3ae889caf2b760dd47d231
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
