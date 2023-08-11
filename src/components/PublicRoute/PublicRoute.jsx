import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/authSelectors';

const PublicRoute = ({ redirect, restricted = false, children }) => {
  const isAuthenticated = useSelector(selectIsAuthorized);

  return isAuthenticated && restricted ? <Navigate to={redirect} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.string.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;
