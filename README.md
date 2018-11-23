# react-navigation-transition-config

<div align="center">

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md#pull-requests) &nbsp; [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier) &nbsp; [![npm version](https://badge.fury.io/js/react-navigation-transition-config.svg)](https://badge.fury.io/js/react-navigation-transition-config) &nbsp; [![DUB](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/MohamadKh75/react-navigation-transition-config/blob/master/LICENSE)

</div>

---

## Install

| Package Manager |                      Command                      |
| :-------------: | :-----------------------------------------------: |
|     **npm**     | `npm i --save react-navigation-transition-config` |
|    **yarn**     |   `yarn add react-navigation-transition-config`   |

## Usage

Use these functions as `transitionConfig` with [react-navigation](https://reactnavigation.org/):

- `fromLeft`

- `fromRight`

- `fromBottom`

- `fromTop`

* `zoomIn`

* `zoomOut`

* `flipX`

* `flipY`

* `fadeIn`

## Example

```javascript
import { createStackNavigator } from "react-navigation";
import { fromLeft } from "react-navigation-transition-config";

const rootStack = createStackNavigator(
  {
    ScreenA: {
      screen: ScreenA
    },
    ScreenB: {
      screen: ScreenB
    }
  },
  {
    initialRouteName: "ScreenA",
    transitionConfig: () => fromLeft()
  }
);
```

**Note:**
The default duration is `300` milliseconds change it:

```javascript
transitionConfig: () => fromLeft(1000),
```

## Transitions

|                               fromLeft                                |                                fromRight                                |                                fromBottom                                |                                fromTop                                |
| :-------------------------------------------------------------------: | :---------------------------------------------------------------------: | :----------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="./GIFs/fromLeft.gif" alt="Will be added soon!" width="250"> | <img src="./GIFs/fromRight.gif" alt="Will be added soon!"  width="250"> | <img src="./GIFs/fromBottom.gif"  alt="Will be added soon!" width="250"> | <img src="./GIFs/fromTop.gif"  alt="Will be added soon!" width="250"> |
|                                   .                                   |                                    .                                    |                                    .                                     |                                   .                                   |
|                              **zoomIn**                               |                               **zoomOut**                               |                                **flipX**                                 |                               **flipY**                               |
| <img src="./gifs/zoomIn.gif" alt="Will be added soon!"  width="250">  |  <img src="./GIFs/zoomOut.gif" alt="Will be added soon!"  width="250">  |   <img src="./GIFs/flipX.gif"  alt="Will be added soon!" width="250">    |  <img src="./GIFs/flipY.gif" alt="Will be added soon!"  width="250">  |
|                                   .                                   |                                    .                                    |                                    .                                     |                                   .                                   |
|                              **fadeIn**                               |                                    -                                    |                                    -                                     |                                   -                                   |
| <img src="./GIFs/fadeIn.gif" alt="Will be added soon!"  width="250">  |                                    -                                    |                                    -                                     |                                   -                                   |

## Credit

This library is based on [react-navigation-transitions](https://github.com/plmok61/react-navigation-transitions). I added more transitions!

## More references

Read more in [react-navigation docs](https://reactnavigation.org/docs/en/stack-navigator.html).
