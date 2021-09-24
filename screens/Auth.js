import React from 'react';
import { Button } from 'react-native';

import useAuth from '../hooks/useAuth';

const Login = () => {
  const { request, promptAsync } = useAuth();
  return (
    <>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </>
  );
};

const LogoutButton = () => {
  const { signout } = useAuth();

  return (
    <Button
      color="red"
      title="Logout"
      onPress={() => {
        signout();
      }}
    />
  );
};

export default Login;
export { LogoutButton };
