import React, { useState, useEffect } from "react";

interface ButtonProps {
  text: string;
}
const RollingText: React.FC<ButtonProps> = ({ text }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const calcualteDepth = (
    minY: number,
    maxY: number,
    scrollPosition: number,
    index: number
  ) => {
    if (scrollPosition > maxY) {
      return 1;
    }
    if (scrollPosition < minY) {
      return 0;
    }
    const log = scrollPosition - index * 1.5;
    if (log < 0) {
      return 0;
    }

    const percentageAdvance = 2 * Math.log10(log / 8);
    return percentageAdvance;
  };

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

  return (
    <div>
      {[...text].map((letter: string, index) => {
        let depth = calcualteDepth(0, 800, scrollPosition, index);
        let round = Math.round(depth * 100);
        if (depth < 0) {
          depth = 0;
        } else if (depth >= 100) {
          depth = 100;
        } else {
          round = round - (round % 3);
          depth = round / 100;
        }

        return (
          <span
            className="text-3xl text-gray-50 font-bold"
            style={{ opacity: depth }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default RollingText;
