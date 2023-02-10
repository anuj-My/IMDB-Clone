import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  /* display: grid;
  grid-template-columns: repeat(4, 25rem); */
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
  margin-bottom: 6rem;
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
const Synopsis = styled.h2`
  margin-bottom: 1rem;
`;
const SynopsisText = styled.div``;
const MovieLinks = styled.div`
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
  /* height: 20rem; */
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
  font-size: 1.6rem;
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

const Movie = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  console.log(movieDetails);
  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=329687fabc3ae889caf2b760dd47d231&language=en-US`
      );

      setMovieDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetails();
    window.scrollTo(0, 0);
  }, []);

  return (
    movieDetails && (
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
                      return (
                        <>
                          <Genre key={genre.id}>{genre.name}</Genre>
                        </>
                      );
                    })}
                </Genres>
              </DetailRightTop>

              <DetailRightBottom>
                <Synopsis>Synopsis</Synopsis>
                <SynopsisText>{movieDetails.overview}</SynopsisText>
              </DetailRightBottom>
            </Right>
          </MovieDetailContainer>

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
        {
          <ProdCompanies>
            <ProdTitle>Production Companies</ProdTitle>
            <Companies>
              {movieDetails.production_companies.length ? (
                movieDetails.production_companies.map((company) => {
                  return (
                    <>
                      <CompanyContainer key={company.id}>
                        {company.logo_path ? (
                          <CompanyLogo
                            src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                          />
                        ) : (
                          <CompanyName>{company.name}</CompanyName>
                        )}
                      </CompanyContainer>
                    </>
                  );
                })
              ) : (
                <span style={{ color: "black" }}>
                  No companies are mentioned.
                </span>
              )}
            </Companies>
          </ProdCompanies>
        }
      </MovieContainer>
    )
  );
};

export default Movie;
