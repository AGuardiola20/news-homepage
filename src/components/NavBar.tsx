import styled from "styled-components";
import Logo from "../assets/images/logo.svg";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: center;
`;

const LinkContainer = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.softRed};
  }
`;

const LogoContainer = styled.a`
  transition: 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <LogoContainer href="#">
        <img src={Logo} alt={`Logo`} />
      </LogoContainer>
      <LinkContainer>
        <Link href="#">Home</Link>
        <Link href="#">New</Link>
        <Link href="#">Popular</Link>
        <Link href="#">Trending</Link>
        <Link href="#">Categories</Link>
      </LinkContainer>
    </NavContainer>
  );
};

export default NavBar;
