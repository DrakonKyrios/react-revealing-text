# react-revealing-text

[![npm version](https://badge.fury.io/js/react-revealing-text.svg)](http://badge.fury.io/js/react-revealing-text)

A date and time picker in the same React.js component. It can be used as a datepicker, timepicker or both at the same time. It is **highly customizable** and it even allows to edit date's milliseconds.

**Version 3 is out!** These are the docs for version 3 of the library. If you are still using the deprecated v2, [here it is its documentation](https://github.com/arqex/react-datetime/blob/2a83208452ac5e41c43fea31ef47c65efba0bb56/README.md), but we strongly recommend to migrate to version 3 in order to keep receiving updates. Please check [migrating react-datetime to version 3](migrateToV3.md) to safely update your app.

## Installation

Install using npm:

```sh
npm install --save @viewtech-labs/revealing-text
```

Install using yarn:

```sh
yarn add @viewtech-labs/revealing-text
```

## Usage

[React.js](http://facebook.github.io/react/) and [Moment.js](http://momentjs.com/) are peer dependencies for react-datetime (as well as [Moment.js timezones](https://momentjs.com/timezone/) if you want to use the `displayTimeZone` prop). These dependencies are not installed along with react-datetime automatically, but your project needs to have them installed in order to make the datepicker work. You can then use the datepicker like in the example below.

```ts
// Import the library
import Datetime from "@viewtech-labs/revealing-text";

// return it from your components
return <Datetime />;
```

[See this example working](https://codesandbox.io/s/boring-dew-uzln3).

Do you want more examples? [Have a look at our resources gallery](resources.md).

**Don't forget to add the [CSS stylesheet](https://github.com/arqex/react-datetime/blob/master/css/react-datetime.css) to make it work out of the box.**. You only need to do this once in your app:

## API

Below we have all the props that we can use with the `<RevealingText>` component. There are also some methods that can be used imperatively.

| Name                 | Type     | Default | Description                                                                                                                                                                     |
| -------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **text**             | `number` | N\A     | Represents the text to be implemented into component, based on the length the reveal will change rate.                                                                          |
| **startZoneY**       | `number` | `1000`  | Subtracting from the offsetY of the component made, `startZoneY` represents the starting zone line triggering the reveal.                                                       |
| **endZoneY**         | `number` | `300`   | Subtracting from the offsetY of the component made, `startEndY` represents the end zone line where all letters are shown.                                                       |
| **opacitySharpness** | `number` | `16`    | Reprents the sharpness of the reveal curve using (1/x^y) y being 16 by default, use a lesser for the curve to be a more rounded curve resulting in more letters being revealed. |
| **minOpacity**       | `number` | `0.1`   | Represents the min opacity for revealing text, allowing for a shadow to be shown first                                                                                          |
| **className**        | `number` | N/A     | Value forwarded to the className of the `div` container of the letters                                                                                                          |

## Usage with TypeScript

Interface for Props

```ts
interface RevealingTextProps {
  text: string;
  startZoneY: number;
  endZoneY: number;
  opacitySharpness?: number;
  minOpacity: number;
  className: string;
}
```
