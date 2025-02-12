// LoginLogic.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../backend/userService.js';
import { useUsersStore } from '../../../store/useUsersStore.js';
import LoginView from './LoginView';

const LoginLogic = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  const { setUser } = useUsersStore();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    setUserNameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const validateForm = () => {
    let valid = true;
    if (!userName.trim()) {
      setUserNameError('User Name is required.');
      valid = false;
    }
    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login(userName, password, (authenticatedUser) => {
        setUser(authenticatedUser.user);
        navigate('/dash-board');
      });
      setUserName('');
      setPassword('');
    }
  };

  return (
      <LoginView
          userName={userName}
          password={password}
          userNameError={userNameError}
          passwordError={passwordError}
          handleUserNameChange={handleUserNameChange}
          handlePasswordChange={handlePasswordChange}
          handleSubmit={handleSubmit}
      />
  );
};

export default LoginLogic;