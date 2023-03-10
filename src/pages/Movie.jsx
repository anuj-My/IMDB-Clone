import { useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Card from "../components/Card";
import { AiFillStar } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";
import { CastContext } from "../context/CastProvider";
import Cast from "../components/Cast";
import ItemBar from "../components/ItemBar";
import { TrailerContext } from "../context/TrailerProvider";

const MovieDetailPage = styled.div`
  position: relative;
  min-height: 100vh;
`;

const VideoPopup = styled.div`
  ${({ playTrailer }) =>
    playTrailer && {
      position: "absolute",
      top: 0,
      zIndex: "5000",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: " rgb(15, 15, 15)",
    }}

  div iframe {
    width: 64rem !important;
    height: 36rem !important;

    @media screen and (max-width: 760px) {
      width: 48rem !important;
      height: 30rem !important;
    }

    @media screen and (max-width: 560px) {
      width: 34rem !important;
      height: 24rem !important;
    }

    @media screen and (max-width: 380px) {
      width: 26rem !important;
      height: 20rem !important;
    }
  }
`;
const Cross = styled.div`
  cursor: pointer;
  position: fixed;
  top: 4rem;
  right: 5rem;
  svg {
    font-size: 4rem;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: ${({ playTrailer }) => playTrailer && "none"};
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

  @media screen and (max-width: 860px) {
    display: none;
  }
`;
const PosterImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Right = styled.div`
  position: absolute;
  left: 32rem;
  top: -22rem;
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
`;
const Genre = styled.span`
  display: inline-block;
  border: 2px solid white;
  border-radius: 2rem;
  padding: 0.5rem 2rem;

  @media screen and (max-width: 560px) {
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

const Button = styled.button`
  cursor: pointer;
  padding: 1.4rem 2.4rem;
  font-weight: bold;
  font-size: 2rem;
  border-radius: 3rem;
  text-transform: capitalize;

  @media screen and (max-width: 760px) {
    font-size: 1.6rem;
    padding: 1.4rem 2rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
    padding: 1.2rem 1.6rem;
  }
`;

const MovieLinks = styled.div`
  margin-top: 3rem;
  padding: 0 2rem;
  display: flex;
  gap: 18rem;
  align-items: center;

  @media screen and (max-width: 760px) {
    gap: 5rem;
  }

  @media screen and (max-width: 560px) {
    gap: 4rem;
  }

  @media screen and (max-width: 380px) {
    gap: 1.8rem;
  }
`;
const Title = styled.div`
  font-size: 2.7rem;

  @media screen and (max-width: 760px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.6rem;
  }
`;
const LinkContainer = styled.div``;

const HomepageLink = styled.a`
  color: white;
  background-color: red;
  padding: 1.4rem 2.4rem;
  border-radius: 3rem;
  text-decoration: none;
  font-weight: bold;

  :not(:last-child) {
    margin-right: 2rem;
  }

  @media screen and (max-width: 760px) {
    padding: 1.4rem 2rem;
  }

  @media screen and (max-width: 560px) {
    padding: 1.2rem 1.6rem;
    font-size: 1.4rem;

    :not(:last-child) {
      margin-right: 1rem;
    }
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
  const [movieDetails, setMovieDetails] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);

  const { id } = useParams();

  const { movieCast, setMovieCast } = useContext(CastContext);
  const { playTrailer, setPlayTrailer } = useContext(TrailerContext);

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
        `https://api.themoviedb.org/3/movie/${id}?api_key=329687fabc3ae889caf2b760dd47d231&language=en-US&append_to_response=videos`
      );
      setMovieDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderTrailer = () => {
    const trailer = movieDetails.videos.results.find(
      (video) => video.name === "Official Trailer"
    );

    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };

    return <YouTube videoId={trailer.key} opts={opts} />;
  };

  const getMovieCast = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=329687fabc3ae889caf2b760dd47d231&language=en-US`
      );

      setMovieCast(data.cast);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getSimilarMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=329687fabc3ae889caf2b760dd47d231&language=en-US&page=1`
      );
      setSimilarMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    movieDetails && (
      <MovieDetailPage key={id}>
        <VideoPopup playTrailer={playTrailer}>
          {movieDetails.videos && playTrailer ? renderTrailer() : null}

          <Cross onClick={() => setPlayTrailer(false)}>
            <IoMdCloseCircle />
          </Cross>
        </VideoPopup>
        <MovieContainer playTrailer={playTrailer}>
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
                  <Button onClick={() => setPlayTrailer(true)}>
                    Watch Trailer
                  </Button>
                </DetailRightBottom>
              </Right>
            </MovieDetailContainer>
            {/* cast ---------- */}

            <Cast movieCast={movieCast} />

            <MovieLinks>
              <Title>Useful Links</Title>
              <LinkContainer>
                {movieDetails.homepage && (
                  <HomepageLink href={movieDetails.homepage} target="_blank">
                    Homepage
                  </HomepageLink>
                )}
                {movieDetails.imdb_id && (
                  <ImdbLink
                    href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                    target="_blank"
                  >
                    IMDB
                  </ImdbLink>
                )}
              </LinkContainer>
            </MovieLinks>
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
    )
  );
};

export default Movie;
