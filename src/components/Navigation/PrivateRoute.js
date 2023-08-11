import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuthorized } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ redirect, children }) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return isAuthorized ? children : <Navigate to={redirect} />;
};

PrivateRoute.propTypes = {
  redirect: PropTypes.string.isRequired,
  children: PropTypes.node,
};
