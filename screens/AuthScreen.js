import React from 'react';
import { Button } from 'react-native';
import { Block, Text } from '../components';

import useAuth from '../hooks/useAuth';

const Login = () => {
  const { request, promptAsync } = useAuth();
  return (
    <Block center middle>
      <Text h1>Prijavi se putem Gugl nalaoga</Text>
      <Button
        disabled={!request}
        title="Prijavi se"
        onPress={() => {
          promptAsync();
        }}
      />
    </Block>
  );
};

export default Login;
