import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Poster from "../components/Poster";
import MoviesList from "../components/MoviesList";

const CustomCarousel = styled(Carousel)`
  .control-dots {
    bottom: 30px;
    @media screen and (max-width: 560px) {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  margin-top: 12rem;
  /* width: 100%;
  margin: auto; */

  @media screen and (max-width: 760px) {
    margin-top: 5rem;
  }
`;

const Home = () => {
  const key = process.env.REACT_APP_API_KEY;
  const [popularMovies, setPopularMoviesData] = useState([]);

  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`
      );

      setPopularMoviesData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
    // eslint-disable-next-line
  }, []);

  const PopularMoviesList = popularMovies.map((movie) => {
    return <Poster movie={movie} key={movie.id} />;
  });
  return (
    <>
      <CustomCarousel
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        {PopularMoviesList}
      </CustomCarousel>

      <Wrapper>
        <MoviesList />
      </Wrapper>
    </>
  );
};

export default Home;
