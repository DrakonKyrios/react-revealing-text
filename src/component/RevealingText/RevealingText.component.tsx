import React, { useState, useEffect, useRef } from "react";
import useRevealingText from "./useRevealingText.hook";
import { RevealingTextProps } from "./RevealingTextProps.types";

const RevealingText: React.FC<RevealingTextProps> = ({
  text,
  startZoneY = 1000,
  endZoneY = 300,
  opacitySharpness = 16,
  minOpacity = 0.1,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const { scrollPosition, calcualteOpacityRate, roundDepth } =
    useRevealingText();

  useEffect(() => {
    setOffset(ref?.current?.offsetTop || 0);
  }, [ref?.current?.offsetTop]);

  return (
    <div ref={ref} className={className}>
      {[...text].map((letter: string, index) => {
        let depth = calcualteOpacityRate(
          startZoneY,
          endZoneY,
          offset,
          opacitySharpness,
          scrollPosition,
          index,
          [...text].length
        );

        depth = roundDepth(depth);

        return (
          <span style={{ opacity: depth > minOpacity ? depth : minOpacity }}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default RevealingText;
