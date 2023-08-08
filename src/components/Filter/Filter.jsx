import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/operations';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      id="filter"
      label="Filter"
      name="filter"
      variant="outlined"
      fullWidth
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;
