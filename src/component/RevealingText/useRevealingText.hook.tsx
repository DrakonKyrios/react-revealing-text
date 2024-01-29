import { useEffect, useState } from "react";

const useRevealingText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(Math.floor(position));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calcualteOpacityRate = (
    startZoneY: number = 0,
    endZoneY: number = 0,
    offset: number = 0,
    opacitySharpness: number = 16,
    scrollPosition: number = 0,
    index: number = 0,
    length: number = 0
  ) => {
    const adjustedStartZoneY = startZoneY > offset ? offset : startZoneY;

    // Reduce rerendering with opacity is oustide of range
    if (scrollPosition > offset - endZoneY) {
      return 1;
    }

    if (scrollPosition < offset - adjustedStartZoneY) {
      return 0;
    }

    const startingPosition = scrollPosition - (offset - adjustedStartZoneY);
    const increment = (endZoneY - adjustedStartZoneY) / length;
    const ratio = (startingPosition / (increment * index)) * 1.2;

    //Creating an inverse exponential curve for revealing text. The higher opacitySharpness = sharper
    return 1 / -Math.pow(ratio, opacitySharpness) + 1.1;
  };

  //increment in 0.05 steps for opacity
  const roundDepth = (depth: number) => {
    let round = Math.round(depth * 100);
    if (depth < 0) {
      depth = 0;
    } else if (depth >= 1) {
      depth = 1;
    } else {
      round = round - (round % 5);
      depth = round / 100;
    }

    return depth;
  };

  return { calcualteOpacityRate, scrollPosition, roundDepth };
};

export default useRevealingText;
