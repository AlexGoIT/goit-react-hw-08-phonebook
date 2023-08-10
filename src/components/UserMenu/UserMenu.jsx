import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Logout from '@mui/icons-material/Logout';

import { selectUserEmail } from 'redux/auth/authSelectors';
import { sxPaperProps, UserEmail } from './UserMenu.styled';

const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = e => {
    console.log(e.currentTarget.textContent);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>
          <PermIdentityIcon />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={sxPaperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <UserEmail>You signed in as:</UserEmail>
        <UserEmail>{userEmail ? userEmail : 'test-user@gmail.com'}</UserEmail>
        <Divider sx={{ mt: 1, mb: 1 }} />
        <MenuItem onClick={handleMenuItemClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
