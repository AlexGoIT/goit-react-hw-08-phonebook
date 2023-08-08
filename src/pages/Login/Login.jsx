import { Container } from '@mui/material';
import LoginForm from 'components/LoginForm';

const Login = () => {
  return (
    <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <LoginForm />
    </Container>
  );
};

export default Login;
