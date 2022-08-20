import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./tooltip.module.css";

const GAP = 4;

type Props = {
  anchor?: Element;
  children?: React.ReactNode;
};

const Tooltip = ({ anchor, children }: Props): React.ReactPortal | null => {
  const ref = React.useRef<HTMLElement | null>();
  const [anchorBounds, setAnchorBounds] = React.useState<DOMRect | undefined>();
  const [styles, setStyles] = React.useState({});

  React.useEffect(() => {
    if (anchor) {
      const bounds = anchor.getBoundingClientRect();
      setAnchorBounds(bounds);
    }
  }, [anchor]);

  React.useEffect(() => {
    if (anchorBounds && ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      const defaultY = anchorBounds.y + anchorBounds.height + GAP;
      const defaultX = anchorBounds.x + anchorBounds.width / 2 - width / 2;
      if (defaultX < 0) {
        setStyles({
          left: anchorBounds.x + anchorBounds.width + GAP,
          top: anchorBounds.y + anchorBounds.height / 2 - height / 2,
        });
      } else if (defaultX + width > window.innerWidth) {
        setStyles({
          left: anchorBounds.x - width - GAP,
          top: anchorBounds.y + anchorBounds.height / 2 - height / 2,
        });
      } else if (defaultY + height > window.innerHeight) {
        setStyles({
          left: defaultX,
          top: anchorBounds.y - height - GAP,
        });
      } else {
        setStyles({
          left: defaultX,
          top: defaultY,
        });
      }
    }
  }, [anchorBounds]);

  if (!anchorBounds) return null;

  return ReactDOM.createPortal(
    <div
      // @ts-ignore
      ref={ref}
      className={css.root}
      style={styles}
    >
      {children}
    </div>,
    document.body
  );
};

export default Tooltip;
