import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import MoviesList from "../components/MoviesList";

const Container = styled.section`
  margin-top: 12rem;
`;

const MovieListContainer = () => {
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
    <Container>
      <MoviesList movieList={movieList} type={type} />
    </Container>
  );
};

export default MovieListContainer;
