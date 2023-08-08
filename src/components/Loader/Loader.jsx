import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
