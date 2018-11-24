import { createStackNavigator } from "react-navigation";
import {
  fromLeft,
  fromRight,
  fromBottom,
  fromTop,
  zoomIn,
  zoomOut,
  flipX,
  flipY,
  fadeIn
} from "react-navigation-transition-config";
import { Landing, First, Second } from "./screens";

const AuthStack = createStackNavigator(
  {
    _Landing: Landing,

    _fromLeft: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => fromLeft()
      }
    ),

    _fromRight: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => fromRight()
      }
    ),

    _fromBottom: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => fromBottom()
      }
    ),

    _fromTop: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => fromTop()
      }
    ),

    _zoomIn: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => zoomIn()
      }
    ),

    _zoomOut: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => zoomOut()
      }
    ),

    _flipX: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => flipX()
      }
    ),

    _flipY: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => flipY()
      }
    ),

    _fadeIn: createStackNavigator(
      {
        _First: First,
        _Second: Second
      },
      {
        initialRouteName: "_First",
        navigationOptions: {
          header: null
        },
        transitionConfig: () => fadeIn()
      }
    )
  },
  {
    initialRouteName: "_Landing",
    headerMode: "screen",
    navigationOptions: {
      header: null
    },
    transitionConfig: () => fadeIn()
  }
);

export default AuthStack;
