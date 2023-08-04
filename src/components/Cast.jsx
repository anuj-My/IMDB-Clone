import { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styled from "styled-components";
import ImageInfoCard from "./ImageInfoCard";

const Casts = styled.div`
  padding: 0 2rem;
  margin-top: 8rem;
`;
const CastsHeading = styled.h1`
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

const Carousel = styled.div`
  height: 25rem;
  position: relative;
  margin: 2rem 0 4rem 0;

  @media screen and (max-width: 760px) {
    height: 24rem;
  }

  @media screen and (max-width: 560px) {
    height: 21rem;
  }
`;
const CarouselBox = styled.div`
  height: 25rem;
  overflow: hidden;
  text-align: center;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  scroll-behavior: smooth;

  @media screen and (max-width: 760px) {
    height: 24rem;
  }

  @media screen and (max-width: 560px) {
    height: 21rem;
  }
`;
const Arrow = styled.a`
  color: white;
  font-weight: bold;
  height: 100%;
  width: 4.5rem;
  line-height: 25rem;
  font-size: 2.5rem;
  text-align: center;
  background-color: #1818189f;
  top: 0;
  z-index: 3;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    width: 3rem;
    font-size: 2rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.6rem;
    width: 2.5rem;
  }
`;
const LeftArrow = styled(Arrow)`
  position: absolute;
  left: 0rem;
  display: ${({ movieCast }) => movieCast.length < 6 && "none"};
`;
const RightArrow = styled(Arrow)`
  display: ${({ movieCast }) => movieCast.length < 6 && "none"};
  position: absolute;
  right: 0rem;
`;

const Cast = ({ movieCast }) => {
  const boxref = useRef();

  // ======slider======
  const onClickHandler = (direction) => {
    const container = boxref.current;
    const card = boxref?.current?.firstElementChild;

    if (direction === "left") {
      container.scrollLeft = container.scrollLeft - card.clientWidth + 6;
    }
    if (direction === "right") {
      container.scrollLeft = container.scrollLeft + card.clientWidth + 6;
    }
  };

  return (
    <Casts>
      <CastsHeading>Casts</CastsHeading>
      <Carousel>
        {movieCast && (
          <CarouselBox ref={boxref}>
            {movieCast.map((cast) => {
              return <ImageInfoCard cast={cast} key={cast?.id} />;
            })}
          </CarouselBox>
        )}

        <LeftArrow movieCast={movieCast} onClick={() => onClickHandler("left")}>
          <MdArrowBackIosNew />
        </LeftArrow>
        <RightArrow
          movieCast={movieCast}
          onClick={() => onClickHandler("right")}
        >
          <MdArrowForwardIos />
        </RightArrow>
      </Carousel>
    </Casts>
  );
};

export default Cast;
