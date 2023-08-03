import styled from "styled-components";
import Logo from "./Logo";

const FooterContainer = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: #1b1b1b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  @media screen and (max-width: 760px) {
    height: 8rem;
  }

  @media screen and (max-width: 560px) {
    height: 7rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
    </FooterContainer>
  );
};

export default Footer;
