import styled from "styled-components";
import Logo from "./Logo";

const FooterContainer = styled.footer`
  width: 100%;
  height: 10rem;
  background-color: #1b1b1b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
    </FooterContainer>
  );
};

export default Footer;
