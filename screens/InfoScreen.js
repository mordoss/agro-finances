/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar, Block } from '../components';
import Chat from '../info/Chat';
import { theme } from '../theme';

const InfoScreen = () => {
  return (
    <ScrollView>
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
          img={require('../assets/programer.jpeg')}
        />
        <Chat />
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgorund,
    padding: theme.sizes.base
  }
});

export default InfoScreen;
