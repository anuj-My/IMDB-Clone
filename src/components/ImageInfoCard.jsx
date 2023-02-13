import styled from "styled-components";

const ItemContainer = styled.div`
  margin: 0 0.5rem;
`;
const ImageContainer = styled.div`
  width: 18rem;
  height: 18rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CastInfo = styled.div``;
const Name = styled.h3``;
const Character = styled.span``;

const ImageInfoCard = ({ cast }) => {
  return (
    <ItemContainer>
      <ImageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
          alt={cast.name}
        />
      </ImageContainer>
      <CastInfo>
        <Name>{cast.name}</Name>
        <Character>{cast.character}</Character>
      </CastInfo>
    </ItemContainer>
  );
};

export default ImageInfoCard;
