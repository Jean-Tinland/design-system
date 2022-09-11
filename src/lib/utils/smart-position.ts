type Gap = { x: number; y: number };

export const get = (
  anchor: HTMLElement,
  align: "left" | "right",
  gap?: Gap
) => {
  const { scrollX, scrollY } = window;
  const {
    top: YOffset,
    left: XOffset,
    width: bodyWidth,
  } = document.body.getBoundingClientRect();
  const { top, left, width, height } = anchor.getBoundingClientRect();

  const containerBottom = top + height + scrollY;
  const containerLeft = left + scrollX;
  const containerRight = bodyWidth - (left + width + scrollX);

  const bodyOffsetY = YOffset + scrollY;
  const bodyOffsetX = XOffset + scrollX;

  const alignAnchorOffset = align === "right" ? containerRight : containerLeft;

  return {
    top: containerBottom - bodyOffsetY + (gap?.y || 0),
    [align]: alignAnchorOffset - bodyOffsetX + (gap?.x || 0),
  };
};
