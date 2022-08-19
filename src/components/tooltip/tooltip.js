import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./tooltip.module.css";

const GAP = 4;

const Tooltip = ({ anchor, children }) => {
  const ref = React.useRef();
  const [anchorBounds, setAnchorBounds] = React.useState();
  const [styles, setStyles] = React.useState({});

  React.useEffect(() => {
    const bounds = anchor.getBoundingClientRect();
    setAnchorBounds(bounds);
  }, [anchor]);

  React.useEffect(() => {
    if (anchorBounds) {
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
    <div ref={ref} className={css.root} style={styles}>
      {children}
    </div>,
    document.body
  );
};

export default Tooltip;
