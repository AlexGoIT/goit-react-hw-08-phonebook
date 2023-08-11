import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
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
