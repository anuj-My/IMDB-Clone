import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 0 0.3rem;
`;
const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;

  @media screen and (max-width: 760px) {
    width: 15rem;
    height: 15rem;
  }

  @media screen and (max-width: 560px) {
    width: 12rem;
    height: 12rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CastInfo = styled.div``;
const Name = styled.h3`
  @media screen and (max-width: 760px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.5rem;
  }
`;
const Character = styled.span`
  @media screen and (max-width: 560px) {
    font-size: 1.4rem;
  }
`;

const ImageInfoCard = ({ cast }) => {
  return (
    <ItemContainer>
      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original${cast?.profile_path}`}
          alt={cast?.name}
        />
      </ImageContainer>
      <CastInfo>
        <Name>{cast?.name}</Name>
        <Character>{cast?.character}</Character>
      </CastInfo>
    </ItemContainer>
  );
};

export default ImageInfoCard;
