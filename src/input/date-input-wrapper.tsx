import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./date-input-wrapper.module.css";

type Props = {
  fieldRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
};

const DateInputWrapper = ({ fieldRef, children }: Props) => {
  if (!fieldRef.current) return null;

  const { scrollX, scrollY } = window;
  const { top: YOffset, left: XOffset } = document.body.getBoundingClientRect();
  const { top, left, height } = fieldRef.current.getBoundingClientRect();

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
