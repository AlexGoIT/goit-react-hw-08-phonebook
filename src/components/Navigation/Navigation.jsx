import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/authSelectors';

import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return (
    <>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isAuthorized && <Link to="/contacts">Contacts</Link>}
      </nav>
      {isAuthorized ? <UserMenu /> : <AuthNav />}
      <UserMenu />
    </>
  );
};

export default Navigation;
