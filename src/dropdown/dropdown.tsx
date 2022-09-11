import * as React from "react";
import * as ReactDOM from "react-dom";
import classnames from "classnames";
import Button from "../button";
import useWindowDimentions from "../lib/hooks/use-window-dimensions";
import * as SmartPosition from "../lib/utils/smart-position";
import css from "./dropdown.module.css";

type Props = {
  anchorRef: React.RefObject<HTMLElement>;
  minWidth?: number | string;
  maxHeight?: number | string;
  gap?: { x: number; y: number };
  align?: "left" | "right";
  className?: string;
  innerClassName?: string;
  breakpoint?: number;
  hiddenUnderBreakpoint?: boolean;
  onClose?: (value: boolean) => void;
  children: React.ReactNode;
};

const Dropdown = React.forwardRef<HTMLElement, Props>(
  (
    {
      anchorRef,
      minWidth = 240,
      maxHeight = 300,
      gap = { x: 0, y: 10 },
      align = "left",
      className,
      innerClassName,
      breakpoint = 480,
      onClose,
      children,
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLDivElement>(null);
    const { width: windowWidth } = useWindowDimentions();
    const [dragStart, setDragStart] = React.useState<number | undefined>();
    const [dragValue, setDragValue] = React.useState<number | undefined>();
    const [closed, setClosed] = React.useState<boolean>(false);

    const preventRender = !anchorRef.current || !windowWidth;

    if (preventRender) return null;

    const stratDragging = (e) => {
      const isMouseDown = e.type === "mousedown";
      const { clientY: y } = isMouseDown ? e : e.targetTouches[0];
      setDragStart(y);
    };

    const updateDragging = (e) => {
      if (!dragStart) {
        setDragValue(undefined);
        return;
      }
      const isMouseMove = e.type === "mousemove";
      const { clientY: y } = isMouseMove ? e : e.targetTouches[0];
      const delta = Math.max(0, y - dragStart);
      setDragValue(delta);
    };

    const endDragging = () => {
      const inner = innerRef?.current;
      if (!inner) return;
      stopDragging();
      const closeDistance = inner.clientHeight / 2;
      if (dragValue && dragValue > closeDistance) {
        setClosed(true);
        setTimeout(() => {
          onClose?.(false);
        }, 160);
      }
    };

    const stopDragging = () => {
      setDragStart(undefined);
      setDragValue(undefined);
    };

    const displayMode = windowWidth > breakpoint ? "dropdown" : "pannel";

    const dropdownStyles = SmartPosition.get(anchorRef.current, align, gap);
    const dropdownInnerStyles = { minWidth, maxHeight };
    const pannelStyles = dragValue
      ? { transform: `translateY(${dragValue}px)`, transition: "none" }
      : undefined;

    const classes = classnames(css[displayMode], className, {
      [css.closed]: closed,
    });
    const innerClasses = classnames(css.inner, innerClassName);

    return ReactDOM.createPortal(
      <div
        // @ts-ignore
        ref={ref}
        className={classes}
        style={displayMode === "dropdown" ? dropdownStyles : pannelStyles}
        onMouseMove={updateDragging}
        onTouchMove={updateDragging}
        onMouseLeave={stopDragging}
        onMouseUp={endDragging}
        onTouchEnd={endDragging}
      >
        {displayMode === "pannel" && (
          <Button
            className={css.handleContainer}
            onTouchStart={stratDragging}
            onMouseDown={stratDragging}
            onMouseUp={endDragging}
          >
            <div className={css.handle} />
          </Button>
        )}
        <div
          // @ts-ignore
          ref={innerRef}
          className={innerClasses}
          style={displayMode === "dropdown" ? dropdownInnerStyles : undefined}
        >
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

export default Dropdown;
