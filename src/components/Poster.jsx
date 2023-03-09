import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PosterImage = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center center;
`;
const PosterOverlay = styled.div`
  position: absolute;
  padding: 10rem;
  bottom: 0px;
  height: 70vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  transition: opacity 0.3s;

  @media screen and (max-width: 760px) {
    padding: 10rem 5rem;
  }

  @media screen and (max-width: 560px) {
    padding: 10rem 1rem;
  }

  &:hover {
    opacity: 1;
  }
`;
const Title = styled.div`
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 1rem;

  @media screen and (max-width: 760px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 2.4rem;
  }
`;
const Runtime = styled.div`
  font-size: 3.5rem;
  margin-bottom: 3rem;

  svg {
    padding-top: 1rem;
  }

  @media screen and (max-width: 760px) {
    font-size: 2.6rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }
`;
const Rating = styled.span`
  margin-left: 10rem;
  margin-top: 2rem;
  font-size: 3.5rem;

  @media screen and (max-width: 760px) {
    font-size: 2.6rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }
`;
const Description = styled.div`
  text-align: left;
  width: 50%;
  font-style: italic;
  text-align: left;

  @media screen and (max-width: 1180px) {
    width: 70%;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.4rem;
  }
`;

const Poster = ({ movie }) => {
  return (
    <Link
      style={{ fontSize: "1.6rem", color: "white" }}
      to={`movie/${movie.id}`}
    >
      <PosterContainer>
        <PosterImage>
          <Image
            src={`https://image.tmdb.org/t/p/original${
              movie && movie.backdrop_path
            }`}
          />
        </PosterImage>

        <PosterOverlay>
          <Title>{movie && movie.original_title}</Title>

          <Runtime>
            {movie && movie.release_date}
            <Rating>{movie && movie.vote_average}</Rating>
            <AiFillStar />
          </Runtime>
          <Description>{movie ? movie.overview : ""}</Description>
        </PosterOverlay>
      </PosterContainer>
    </Link>
  );
};

export default Poster;
