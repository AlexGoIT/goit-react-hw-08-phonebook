import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Logo = styled.h1`
  color: #ffd700;
  text-transform: uppercase;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;
  font-weight: 500;
  color: #ffd700;

  &.active::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
    background-color: #ffd700;
  }
`;
