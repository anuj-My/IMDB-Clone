import styled from "styled-components";

const LogoContainer = styled.span`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media screen and (max-width: 750px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 2.4rem;
  }

  span {
    font-size: 3rem;
    text-transform: uppercase;
    color: red;
    font-weight: bolder;

    @media screen and (max-width: 750px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 2.4rem;
    }
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <span>I</span>FLIX
    </LogoContainer>
  );
};

export default Logo;
