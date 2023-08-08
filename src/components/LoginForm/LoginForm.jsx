import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Wrapper, Form, FormTitle } from './LoginForm.styled';
import { useState } from 'react';
import { passwordValidator } from 'utils/validators';

const LoginForm = () => {
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    // const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!passwordValidator(password)) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    form.reset();
  };

  return (
    <Wrapper>
      <FormTitle>Login</FormTitle>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          name="email"
          variant="outlined"
          type="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          title="Email may contain only letters, apostrophe, dash and spaces."
          required
          sx={{ mb: 2 }}
        />
        <TextField
          error={passwordError}
          label="Password *"
          name="password"
          variant="outlined"
          type="password"
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          helperText={
            passwordError
              ? 'Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
              : ''
          }
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">
          Sign in
        </Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
