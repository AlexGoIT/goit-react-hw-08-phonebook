import Logout from '@mui/icons-material/Logout';
import { Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectUserEmail, selectUserName } from 'redux/auth/authSelectors';
import { sxPaperProps, UserEmail, UserName } from './MenuContainer.styled';

const MenuContainer = ({ anchorEl, onCloseMenu }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onCloseMenu}
      onClick={onCloseMenu}
      slotProps={{ paper: sxPaperProps }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <UserName>Hello, {userName}</UserName>
      <UserEmail>{userEmail ? userEmail : 'test-user@gmail.com'}</UserEmail>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <MenuItem onClick={() => dispatch(logout())}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default MenuContainer;
