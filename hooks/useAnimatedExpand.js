import { useState } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';

const useAnimatedExpand = () => {
  const [expanded, setExpanded] = useState(false);
  const changeLayout = () => {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return {
    expanded,
    changeLayout,
  };
};

export default useAnimatedExpand;
