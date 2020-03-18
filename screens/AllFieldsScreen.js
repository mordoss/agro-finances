import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { Tabs, Block } from '../components';
import FieldsConnected from '../AllFields/FieldsConnected';
import Statistics from '../AllFields/StatisticsConnected';
import HeaderIcon from '../AllFields/HeaderIcon';
import { theme } from '../theme';

const AllFieldsScreen = ({ navigation }) => {
  const tabs = ['Sve Njive', 'Ukupna Statistika'];
  const [active, changeActive] = useState('Sve Njive');

  return (
    <Block color={theme.colors.backgorund}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
        keyboardVerticalOffset={theme.sizes.base * 6}
      >
        <ScrollView>
          <Tabs tabs={tabs} active={active} changeActive={changeActive} />
          {active === 'Sve Njive' && <FieldsConnected navigation={navigation} />}
          {active === 'Ukupna Statistika' && <Statistics />}
        </ScrollView>
      </KeyboardAvoidingView>
    </Block>
  );
};

AllFieldsScreen.navigationOptions = screenProps => {
  return {
    headerLeft: () => (
      <HeaderIcon
        // eslint-disable-next-line global-require
        imageSource={require('../assets/icons/calendar.svg.png')}
        position="Left"
        navigate={screenProps.navigation.navigate}
      />
    ),
    headerRight: () => (
      <HeaderIcon
        // eslint-disable-next-line global-require
        imageSource={require('../assets/icons/info.png')}
        position="Right"
        navigate={screenProps.navigation.navigate}
      />
    ),
  };
};

export default AllFieldsScreen;
