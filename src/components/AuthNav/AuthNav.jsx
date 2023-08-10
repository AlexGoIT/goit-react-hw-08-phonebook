import { StyledNavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </>
  );
};

export default AuthNav;
