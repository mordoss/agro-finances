import React from 'react';
import { VictoryBar, VictoryChart } from 'victory-native';
import { View, Dimensions } from 'react-native';
import { theme } from '../../theme';

const BarChart = ({ expanded, invested, income }) => {
  const data = [{ x: 'Uloženo', y: invested }, { x: 'Prihod', y: income }];
  return (
    <View
      style={{
        height: expanded ? null : 0,
        overflow: 'hidden',
        alignItems: 'center',
        marginHorizontal: 10,
      }}
    >
      <VictoryChart
        width={Dimensions.get('window').width / 1.5}
        padding={{ top: 40, bottom: 30, left: 80, right: 80 }}
      >
        <VictoryBar
          data={data}
          cornerRadius={theme.sizes.radius / 2}
          alignment="middle"
          style={{
            data: {
              fill: ({ datum }) =>
                datum.x === 'Uloženo' ? theme.colors.primary : theme.colors.secondary,
            },
          }}
          barWidth={theme.sizes.base * 2}
        />
      </VictoryChart>
    </View>
  );
};

export default BarChart;
