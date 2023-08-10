import { useState } from 'react';

import { Avatar, IconButton } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import MenuContainer from 'components/MenuContainer';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
        <Avatar sx={{ width: 32, height: 32 }}>
          <PermIdentityIcon />
        </Avatar>
      </IconButton>
      <MenuContainer anchorEl={anchorEl} onCloseMenu={handleClose} />
    </>
  );
};

export default UserMenu;
