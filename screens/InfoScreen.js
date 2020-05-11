/* eslint-disable global-require */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Block } from '../components';
import { theme } from '../theme';

const InfoScreen = () => {
  return (
    <Block style={styles.container}>
      <Avatar
        name="Miloš Stojanović"
        position="Stručni konsultant"
        email="milos.stojn@gmail.com"
        img={require('../assets/consultant.jpg')}
      />
      <Avatar
        name="Miloš Petrović"
        position="Programer"
        email="milos8petrovic8@gmail.com"
        img={require('../assets/programer.jpg')}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgorund,
    padding: theme.sizes.base,
  },
});

export default InfoScreen;
