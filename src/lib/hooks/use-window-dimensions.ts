import * as React from "react";

type Dimensions = {
  width: number | undefined;
  height: number | undefined;
};

const useWindowDimentions = () => {
  const [dimensions, setDimensions] = React.useState<Dimensions>({
    width: undefined,
    height: undefined,
  });

  const resized = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    resized();
    const isCompatible = typeof ResizeObserver !== "undefined";
    if (isCompatible) {
      const observer = new ResizeObserver(resized);
      observer.observe(document.body);
      return () => {
        observer.unobserve(document.body);
      };
    } else {
      window.addEventListener("resize", resized);
      return () => {
        window.removeEventListener("resize", resized);
      };
    }
  }, []);

  return dimensions;
};

export default useWindowDimentions;
