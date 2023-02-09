import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const CardContainer = styled.div`
  height: 30rem;
  width: 20rem;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 30rem;
  padding: 2rem;
`;
const Title = styled.div`
  font-size: 2rem;
`;
const Runtime = styled.div``;
const Rating = styled.div`
  margin-left: 3rem;
`;
const Description = styled.div`
  font-size: 1.4rem;
`;

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <CardContainer>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </CardContainer>
      ) : (
        <Link
          to={`movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white", width: "none" }}
        >
          <CardContainer>
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.poster_path
              }`}
            />
            <Overlay>
              <Title>{movie ? movie.original_title : ""}</Title>
              <Runtime>
                {movie ? movie.releaseDatae : ""}
                <Rating>
                  {movie ? movie.vote_average : ""}
                  <AiFillStar />
                </Rating>
              </Runtime>
              <Description>
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </Description>
            </Overlay>
          </CardContainer>
        </Link>
      )}
    </>
  );
};

export default Card;
