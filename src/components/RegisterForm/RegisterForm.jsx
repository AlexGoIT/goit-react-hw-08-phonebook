import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Wrapper, Form, FormTitle } from './RegisterForm.styled';

const RegisterForm = () => {
  return (
    <Wrapper>
      <FormTitle>Register</FormTitle>
      <Form>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          type="text"
          pattern="^([A-Za-z-']{1,50})|([А-Яа-я-']{1,50})$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          sx={{ mb: 2 }}
        />
        <TextField
          id="email"
          label="E-mail"
          variant="outlined"
          type="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          required
          sx={{ mb: 2 }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          length={8}
          required
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">
          Sign up
        </Button>
      </Form>
    </Wrapper>
  );
};

export default RegisterForm;
