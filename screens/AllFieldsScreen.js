import React, { useState } from 'react';
import { Tabs, Block } from '../components';
import FieldsConnected from '../AllFields/FieldsConnected';
import HeaderIcon from '../AllFields/HeaderIcon';
import { theme } from '../theme';

const AllFieldsScreen = ({ navigation }) => {
  const tabs = ['Sve Njive', 'Ukupna Statistika'];
  const [active, changeActive] = useState('Sve Njive');

  return (
    <Block color={theme.colors.gray2}>
      <Tabs tabs={tabs} active={active} changeActive={changeActive} />
      {active === 'Sve Njive' && <FieldsConnected navigation={navigation} />}
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
        imageSource={require('../assets/icons/settings.svg.png')}
        position="Right"
        navigate={screenProps.navigation.navigate}
      />
    ),
  };
};

export default AllFieldsScreen;
