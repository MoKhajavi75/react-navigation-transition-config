import { Animated, Easing } from "react-native";

function zoomIn(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },

    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const scale = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1]
      });

      return { transform: [{ scale }] };
    }
  };
}

export { zoomIn };
