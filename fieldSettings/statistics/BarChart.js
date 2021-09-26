import React from 'react';
import { VictoryBar, VictoryChart } from 'victory-native';
import { View, Dimensions } from 'react-native';
import { theme } from '../../theme';

const { base, radius } = theme.sizes;

const BarChart = ({ expanded, invested, income }) => {
  const data = [
    { x: 'Uloženo', y: invested },
    { x: 'Prihod', y: income }
  ];
  return (
    <View
      style={{
        height: expanded ? null : 0,
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <VictoryChart
        width={Dimensions.get('window').width / 1.5}
        domainPadding={base * 2}
        padding={{
          top: base,
          bottom: base * 2,
          left: base * 5,
          right: base * 3
        }}
      >
        <VictoryBar
          data={data}
          cornerRadius={radius / 2}
          alignment="middle"
          style={{
            data: {
              fill: ({ datum }) =>
                datum.x === 'Uloženo'
                  ? theme.colors.primary
                  : theme.colors.secondary
            }
          }}
          barWidth={base * 2}
        />
      </VictoryChart>
    </View>
  );
};

export default BarChart;
