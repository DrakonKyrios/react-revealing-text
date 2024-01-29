# react-revealing-text

[![npm version](https://badge.fury.io/js/@viewtech-labs%2Frevealing-text.svg)](https://badge.fury.io/js/@viewtech-labs%2Frevealing-text)

A react text container component that reveals letter by letter as you scroll through the page. I originally saw this in a youtube video but wanted to recreate this effect regardless of the content.

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

```ts
// Import the library
import { RevealingText } from "@viewtech-labs/revealing-text";

// return it from your components
return (
  <RevealingText
    className="[&>span]:text-3xl [&>span]:text-gray-50 [&>span]:font-bold"
    startZoneY={1000}
    endZoneY={300}
    opacitySharpness={16}
    minOpacity={0.1}
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
      eveniet voluptate! Quia at atque voluptas quis distinctio ut
      labore! Error ad sapiente voluptatem fuga rerum tenetur quod.
      Sit, modi minima. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Eius, eveniet voluptate! Quia at atque
      voluptas quis distinctio ut labore! Error ad sapiente voluptatem
      fuga rerum tenetur quod. Sit, modi minima."
  />
);
```

[See this example working](https://codesandbox.io/p/sandbox/revealing-text-forked-7h6ssg?file=%2Fsrc%2Fstyles.css%3A3%2C22).

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
