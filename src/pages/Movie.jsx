import { useEffect, useState, useContext } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { HashLoader } from "react-spinners";

import { CastContext } from "../context/CastProvider";
import Card from "../components/Card";
import Cast from "../components/Cast";
import ItemBar from "../components/ItemBar";

const MovieDetailPage = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MovieInfoWrapper = styled.div`
  width: 83%;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`;

const MovieBackground = styled.div`
  max-width: 100%;
  height: 50rem;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.7)
  );

  @media screen and (max-width: 860px) {
    /* position: static; */
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  }
`;
const BackgroundImage = styled.img`
  z-index: -1;
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const MovieDetailContainer = styled.div`
  position: relative;
  height: 23rem;

  @media screen and (max-width: 860px) {
    /* position: static; */
    height: 0;
    margin-bottom: 4rem;
  }
`;
const Left = styled.div`
  position: relative;
`;
const PosterContainer = styled.div`
  width: 25rem;
  height: 40rem;
  position: absolute;
  bottom: -19rem;
  left: 4rem;
  border-radius: 1.5rem;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;
const PosterImage = styled.img`
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
`;
const Right = styled.div`
  position: absolute;
  left: 32rem;
  top: -24rem;
  max-width: 73%;

  @media screen and (max-width: 1280px) {
    width: 60%;
  }

  @media screen and (max-width: 860px) {
    left: 2rem;
    top: -55rem;
    width: 70%;
  }

  @media screen and (max-width: 760px) {
    width: 90%;
  }

  @media screen and (max-width: 560px) {
    width: 98%;
  }
`;

const DetailRightTop = styled.div`
  margin-bottom: 4rem;
`;

const Name = styled.h1`
  margin-bottom: 0.6rem;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  @media screen and (max-width: 760px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 2rem;
  }
`;
const Tagline = styled.div`
  margin-bottom: 0.6rem;

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;
const Rating = styled.div`
  margin-bottom: 0.6rem;

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;
const VoteCount = styled.span`
  margin-left: 2rem;

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;
const Runtime = styled.div`
  margin-bottom: 0.6rem;

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;
const ReleaseDate = styled.div`
  margin-bottom: 2rem;

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;
const Genres = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;
const Genre = styled.span`
  display: inline-block;
  border: 2px solid white;
  border-radius: 2rem;
  padding: 0.5rem 2rem;

  @media screen and (max-width: 1064px) {
    font-size: 1.4rem;
    padding: 0.5rem 1.3rem;
  }
`;
const DetailRightBottom = styled.div``;
const SynopsisHeading = styled.h2`
  margin-bottom: 1rem;
  text-transform: capitalize;
  letter-spacing: 1.5px;
  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.7rem;
  }
`;
const SynopsisText = styled.div`
  margin-bottom: 1.5rem;

  @media screen and (max-width: 560px) {
    font-size: 1.4rem;
  }
`;

const TrailerContainer = styled.div`
  margin-top: 7rem;
`;

const TrailerHeading = styled.h1`
  padding-left: 2rem;
  font-size: 3.6rem;
  letter-spacing: 1.5px;
  text-transform: capitalize;

  @media screen and (max-width: 760px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 2rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  margin-top: 4rem;
`;

const HomepageLink = styled.a`
  color: white;
  background-color: red;
  padding: 1.4rem 2.4rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 760px) {
    padding: 1.4rem 2rem;
  }

  @media screen and (max-width: 560px) {
    padding: 1.2rem 1.6rem;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 380px) {
    padding: 1.2rem 1.4rem;
  }
`;
const ImdbLink = styled(HomepageLink)`
  background-color: #e6b91e;
`;

const SimilarMovieList = styled.div`
  width: 83%;
  padding-top: 5rem;
  margin: auto;

  @media screen and (max-width: 820px) {
    width: 98%;
  }
`;
const SimilarMovieHead = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;
const SmList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 22rem);
  grid-template-rows: masonry;
  justify-content: center;
`;

const Movie = () => {
  const key = process.env.REACT_APP_API_KEY;
  const [movieDetails, setMovieDetails] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);

  const { id } = useParams();

  const { movieCast, setMovieCast } = useContext(CastContext);

  useEffect(() => {
    getMovieDetails();
    getSimilarMovies();
    getMovieCast();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [id]);

  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=videos`
      );
      setMovieDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  const trailer = movieDetails?.videos?.results.find(
    (video) => video.name === "Official Trailer" || video.site === "YouTube"
  );
  const renderTrailer = () => {
    const opts = {
      height: "460",
      width: "100%",
    };
    return (
      <YouTube
        videoId={trailer?.key}
        opts={opts}
        style={{ margin: "5rem 0" }}
      />
    );
  };

  const getMovieCast = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
      );

      setMovieCast(data.cast);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSimilarMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}&language=en-US&page=1`
      );
      setSimilarMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return movieDetails ? (
    <MovieDetailPage key={id}>
      <MovieContainer>
        <MovieInfoWrapper>
          <MovieBackground>
            <BackgroundImage
              src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            />
          </MovieBackground>

          <MovieDetailContainer>
            <Left>
              <PosterContainer>
                <PosterImage
                  src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                ></PosterImage>
              </PosterContainer>
            </Left>
            <Right>
              <DetailRightTop>
                <Name>{movieDetails.title}</Name>
                <Tagline>{movieDetails.tagline}</Tagline>
                <Rating>
                  {Number(movieDetails.vote_average).toFixed(1)}
                  <AiFillStar />
                  <VoteCount>({movieDetails.vote_count}) votes</VoteCount>
                </Rating>
                <Runtime>{movieDetails.runtime} mins</Runtime>
                <ReleaseDate>
                  Release Date: {movieDetails.release_date}
                </ReleaseDate>
                <Genres>
                  {movieDetails.genres &&
                    movieDetails.genres.map((genre) => {
                      return <Genre key={genre.id}>{genre.name}</Genre>;
                    })}
                </Genres>
              </DetailRightTop>

              <DetailRightBottom>
                <SynopsisHeading>Synopsis</SynopsisHeading>
                <SynopsisText>{movieDetails.overview}</SynopsisText>
              </DetailRightBottom>

              <LinkContainer>
                {movieDetails.homepage && (
                  <HomepageLink href={movieDetails.homepage} target="_blank">
                    Homepage
                    <BiLinkExternal size={20} />
                  </HomepageLink>
                )}
                {movieDetails.imdb_id && (
                  <ImdbLink
                    href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                    target="_blank"
                  >
                    IMDB
                    <BiLinkExternal size={20} />
                  </ImdbLink>
                )}
              </LinkContainer>
            </Right>
          </MovieDetailContainer>
          {/* cast ---------- */}
          <TrailerContainer>
            <TrailerHeading>{trailer.name}</TrailerHeading>

            {movieDetails.videos ? renderTrailer() : null}
          </TrailerContainer>

          <Cast movieCast={movieCast} />
        </MovieInfoWrapper>

        <ItemBar items={movieDetails.production_companies} />

        <SimilarMovieList>
          <SimilarMovieHead>Similar Movies:</SimilarMovieHead>
          <SmList>
            {similarMovies && similarMovies.length ? (
              similarMovies.map((movie) => {
                return <Card movie={movie} key={movie.id} />;
              })
            ) : (
              <span
                style={{
                  color: "white",
                  gridColumn: "1 / 7",
                  fontSize: "2rem",
                }}
              >
                There are no similar movie related to {movieDetails.title}
              </span>
            )}
          </SmList>
        </SimilarMovieList>
      </MovieContainer>
    </MovieDetailPage>
  ) : (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HashLoader
        color="#dc0000"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Movie;
