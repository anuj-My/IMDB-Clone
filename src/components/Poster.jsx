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
  height: 100vh;
`;
const Image = styled.img`
  /* padding-bottom: 20rem; */
`;
const PosterOverlay = styled.div`
  position: absolute;
  background-color: rgba(39, 1, 1, 0.5);
  width: 100%;
  height: 100vh;
  padding: 0 10rem;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 6rem;
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
