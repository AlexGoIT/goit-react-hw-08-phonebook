import Logout from '@mui/icons-material/Logout';
import { Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/authSelectors';
import { sxPaperProps, UserEmail } from './MenuConteiner.styled';

const MenuConteiner = ({ anchorEl, onCloseMenu }) => {
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
      onClose={onCloseMenu}
      onClick={onCloseMenu}
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

export default MenuConteiner;
