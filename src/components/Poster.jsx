import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const PosterContainer = styled.div``;
const PosterImage = styled.div``;
const Image = styled.img``;
const PosterOverlay = styled.div``;
const Title = styled.div``;
const Runtime = styled.div``;
const Rating = styled.span``;
const Description = styled.div``;

const Poster = ({ movie }) => {
  return (
    <Link to={`movie/${movie.id}`}>
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
        </PosterOverlay>
        <Description>{movie ? movie.overview : ""}</Description>
      </PosterContainer>
    </Link>
  );
};

export default Poster;
