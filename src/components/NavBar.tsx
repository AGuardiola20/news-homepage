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
    color: ${({ theme }) => theme.colors.softRed};
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <a href="#">
        <img src={Logo} alt={`Logo`} />
      </a>
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
