import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PosterImage = styled.div`
  width: 100%;
  height: 60rem;
`;
const Image = styled.img`
  /* padding-bottom: 20rem; */
  margin: auto;
  display: block;
  width: 100%;
`;
const PosterOverlay = styled.div`
  position: absolute;
  padding: 10rem;
  bottom: 0px;
  height: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;
const Title = styled.div`
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;
const Runtime = styled.div`
  font-size: 3.5rem;
  margin-bottom: 3rem;

  svg {
    padding-top: 1rem;
  }
`;
const Rating = styled.span`
  margin-left: 10rem;
  margin-top: 2rem;
  font-size: 3.5rem;
`;
const Description = styled.div`
  text-align: left;
  width: 50%;
  font-style: italic;
  text-align: left;
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
