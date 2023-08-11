import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'redux/auth/authSelectors';

import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { StyledNavLink, NavWrapper } from './Navigation.styled';

const Navigation = () => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <>
      <NavWrapper>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isAuthorized && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
        {isAuthorized ? <UserMenu /> : <AuthNav />}
      </NavWrapper>
    </>
  );
};

export default Navigation;
