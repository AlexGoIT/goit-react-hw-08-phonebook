import { useState } from 'react';

import { Avatar } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import MenuContainer from 'components/MenuContainer';
import { Link } from 'react-router-dom';

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
      <Link onClick={handleClick}>
        <Avatar
          sx={{ width: 32, height: 32, bgcolor: '#FFD700', color: '#0057B8' }}
        >
          <PermIdentityIcon />
        </Avatar>
      </Link>
      <MenuContainer anchorEl={anchorEl} onCloseMenu={handleClose} />
    </>
  );
};

export default UserMenu;
