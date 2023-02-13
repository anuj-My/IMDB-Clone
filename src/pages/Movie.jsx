import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import YouTube from "react-youtube";
import Card from "../components/Card";
import ImageInfoCard from "../components/ImageInfoCard";
import { AiFillStar } from "react-icons/ai";
import { IoMdCloseCircle } from "react-icons/io";

const MovieDetailPage = styled.div`
  position: relative;
`;

const VideoPopup = styled.div`
  ${({ playTrailer }) =>
    playTrailer && {
      position: "absolute",
      zIndex: "5000",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: " rgb(15, 15, 15)",
    }}
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
  width: 80%;
`;

const MovieBackground = styled.div`
  width: 100%;
  height: 50rem;
  background-color: rgba(0, 0, 0, 0.78);
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
`;
const PosterImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Right = styled.div`
  position: absolute;
  left: 32rem;
  top: -22rem;
  width: 75%;
`;
const DetailRightTop = styled.div`
  margin-bottom: 4rem;
`;
const Name = styled.h1`
  margin-bottom: 0.6rem;
`;
const Tagline = styled.div`
  margin-bottom: 0.6rem;
`;
const Rating = styled.div`
  margin-bottom: 0.6rem;
`;
const VoteCount = styled.span`
  margin-left: 2rem;
`;
const Runtime = styled.div`
  margin-bottom: 0.6rem;
`;
const ReleaseDate = styled.div`
  margin-bottom: 2rem;
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
`;
const DetailRightBottom = styled.div``;
const SynopsisHeading = styled.h2``;
const SynopsisText = styled.div`
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  padding: 1.5rem 3rem;
  font-weight: bold;
  font-size: 2rem;
  border-radius: 3rem;
`;

const Carousel = styled.div`
  height: 25rem;
  position: relative;
`;
const CarouselBox = styled.div`
  height: 25rem;
  overflow: hidden;
  text-align: center;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
`;
const Arrow = styled.a`
  color: white;
  font-weight: bold;
  height: 100%;
  width: 4.5rem;
  line-height: 25rem;
  font-size: 2.5rem;
  text-align: center;
  background-color: lightgreen;
  top: 0;
  z-index: 3;
`;
const LeftArrow = styled(Arrow)`
  position: absolute;
  left: -5rem;
`;
const RightArrow = styled(Arrow)`
  position: absolute;
  right: -5rem;
`;

const MovieLinks = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 19rem;
  align-items: center;
`;
const Title = styled.div`
  font-size: 3rem;
`;
const LinkContainer = styled.div``;

const ProdCompanies = styled.div`
  margin-top: 7rem;
  display: grid;
  place-items: center;
  background-color: #e6e6e6;
  width: 100%;
  padding: 3rem 0;
`;
const ProdTitle = styled.div`
  font-size: 4rem;
  color: black;
  font-weight: 500;
  margin-bottom: 2.5rem;
`;
const Companies = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const CompanyContainer = styled.div`
  width: 23rem;
`;

const CompanyLogo = styled.img`
  width: 100%;
`;

const CompanyName = styled.span`
  font-size: 1.4rem;
  border-radius: 3rem;
  padding: 2rem 3rem;
  color: white;
  background-color: black;
`;

const HomepageLink = styled.a`
  color: white;
  background-color: red;
  padding: 1.5rem 3rem;
  border-radius: 3rem;
  text-decoration: none;
  font-weight: bold;

  :not(:last-child) {
    margin-right: 2rem;
  }
`;
const ImdbLink = styled(HomepageLink)`
  background-color: #e6b91e;
`;

const SimilarMovieList = styled.div`
  width: 83%;
  padding-top: 5rem;
  margin: auto;
`;
const SimilarMovieHead = styled.h1`
  margin-bottom: 2rem;
`;
const SmList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 20rem);
  gap: 1rem;
`;

const Movie = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [playTrailer, setPlayTrailer] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails();
    getSimilarMovies();
    getMovieCast();
    window.scrollTo(0, 0);
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
            <div>
              <h1>Casts</h1>
              <Carousel>
                {movieCast && (
                  <CarouselBox>
                    {movieCast.map((cast) => {
                      return <ImageInfoCard cast={cast} key={cast.id} />;
                    })}
                  </CarouselBox>
                )}

                <LeftArrow>&#60;</LeftArrow>
                <RightArrow>&#62;</RightArrow>
              </Carousel>
            </div>

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
          {movieDetails.production_companies && (
            <ProdCompanies>
              <ProdTitle>Production Companies</ProdTitle>
              <Companies>
                {movieDetails.production_companies.length ? (
                  movieDetails.production_companies.map((company) => {
                    return (
                      // <>
                      <CompanyContainer key={company.id}>
                        {company.logo_path ? (
                          <CompanyLogo
                            src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                          />
                        ) : (
                          <CompanyName key={company.id}>
                            {company.name}
                          </CompanyName>
                        )}
                      </CompanyContainer>
                      // </>
                    );
                  })
                ) : (
                  <span style={{ color: "black" }}>
                    No companies are mentioned.
                  </span>
                )}
              </Companies>
            </ProdCompanies>
          )}

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
