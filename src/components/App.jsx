import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
