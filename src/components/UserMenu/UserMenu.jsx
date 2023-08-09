import { PropTypes } from 'prop-types';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Logout from '@mui/icons-material/Logout';
import { sxPaperProps, UserEmail } from './UserMenu.styled';
import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';

const UserMenu = ({ anchorEl, onClick }) => {
  const userEmail = useSelector(selectUserEmail);
  const open = Boolean(anchorEl);

  const handleMenuItemClick = e => {
    console.log(e.currentTarget.textContent);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={onClick}
      onClick={onClick}
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
  );
};

export default UserMenu;

UserMenu.propTypes = {
  anchorEl: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};
