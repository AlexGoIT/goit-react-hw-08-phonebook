import { Container } from '@mui/material';
import RegisterForm from 'components/RegisterForm';

const Register = () => {
  return (
    <Container className="container" maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <RegisterForm />
    </Container>
  );
};

export default Register;
