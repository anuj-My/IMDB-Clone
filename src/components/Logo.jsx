import styled from "styled-components";

const LogoContainer = styled.span`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 3px;

  span {
    font-size: 4rem;
    text-transform: uppercase;
    color: red;
    font-weight: bolder;
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
