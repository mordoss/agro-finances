import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Block } from '../components';
import Fields from '../AllFields/Fields';
import HeaderIcon from '../AllFields/HeaderIcon';
import { theme } from '../theme';

const AllFieldsScreen = ({ navigation }) => {
  const tabs = ['Sve Njive', 'Ukupna Statistika'];
  const [active, changeActive] = useState('Sve Njive');
  const fields = useSelector(state => [
    [state.field0.plant, state.field0.area, 0],
    [state.field1.plant, state.field1.area, 1],
    [state.field2.plant, state.field2.area, 2],
    [state.field3.plant, state.field3.area, 3],
  ]);
  const dispatch = useDispatch();
  const handleChangeField = key => {
    dispatch({ type: 'FIELD_CHANGED', field: key });
    navigation.navigate('FieldSettingsScreen');
  };

  return (
    <Block style={{ marginHorizontal: theme.sizes.base * 3 }}>
      <Tabs tabs={tabs} active={active} changeActive={changeActive} />
      {active === 'Sve Njive' && <Fields fields={fields} handleChangeField={handleChangeField} />}
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
