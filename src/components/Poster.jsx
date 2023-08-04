import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 760px) {
    height: 67vh;
  }
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
  height: 85vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.587), rgba(0, 0, 0, 0.773));
  transition: opacity 0.3s;

  @media screen and (max-width: 760px) {
    padding: 10rem 5rem;
    height: 67vh;
  }

  @media screen and (max-width: 560px) {
    padding: 10rem 1rem;
  }

  &:hover {
    opacity: 1;
  }
`;
const Title = styled.div`
  font-size: 5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  text-align: left;

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
      to={`movie/${movie?.id}`}
    >
      <PosterContainer>
        <PosterImage>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          />
        </PosterImage>

        <PosterOverlay>
          <Title>{movie?.original_title}</Title>

          <Runtime>
            {movie?.release_date}
            <Rating>{movie?.vote_average}</Rating>
            <AiFillStar />
          </Runtime>
          <Description>{movie?.overview}</Description>
        </PosterOverlay>
      </PosterContainer>
    </Link>
  );
};

export default Poster;
