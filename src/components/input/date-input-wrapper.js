import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./date-input-wrapper.module.css";

const DateInputWrapper = ({ container, children }) => {
  const { scrollX, scrollY } = window;
  const { top: YOffset, left: XOffset } = document.body.getBoundingClientRect();
  const { top, left, height } = container.getBoundingClientRect();

  const containerBottom = top + height + scrollY;
  const containerLeft = left + scrollX;

  const bodyOffsetY = YOffset + scrollY;
  const bodyOffsetX = XOffset + scrollX;

  const styles = {
    top: containerBottom - bodyOffsetY,
    left: containerLeft - bodyOffsetX,
  };

  return ReactDOM.createPortal(
    <div className={css.dateInputWrapper} style={styles}>
      {children}
    </div>,
    document.body
  );
};

export default DateInputWrapper;
