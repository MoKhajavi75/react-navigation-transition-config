import { Animated, Easing } from "react-native";

function flipY(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },

    screenInterpolator: ({ position, scene }) => {
      const { index } = scene;

      const rotateY = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: ["180deg", "0deg"]
      });

      return { transform: [{ rotateY }], backfaceVisibility: "hidden" };
    }
  };
}

export { flipY };
