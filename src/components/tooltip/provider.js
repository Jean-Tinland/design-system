import * as React from "react";
import Tooltip from "./tooltip";

const ATTRIBUTE = "data-tooltip";

const getUniqueId = () => {
  return Math.floor((1 + Math.random()) * 0x10000);
};

const TooltipProvider = ({ children }) => {
  const [uniqueId, setUniqueId] = React.useState();
  const [anchor, setAnchor] = React.useState();
  const [tooltip, setTooltip] = React.useState();

  const show = (e) => {
    setUniqueId(getUniqueId());
    const element = e.target.closest(`[${ATTRIBUTE}]`);
    const value = element.getAttribute(ATTRIBUTE);
    setAnchor(element);
    setTooltip(value);
  };

  const hide = (e) => {
    setTooltip(undefined);
  };

  React.useEffect(() => {
    const targets = Array.from(document.querySelectorAll(`[${ATTRIBUTE}]`));
    targets.forEach((target) => target.addEventListener("mouseenter", show));
    targets.forEach((target) => target.addEventListener("mouseleave", hide));
    return () => {
      targets.forEach((target) =>
        target.removeEventListener("mouseenter", show)
      );
      targets.forEach((target) =>
        target.removeEventListener("mouseleave", hide)
      );
    };
  }, []);

  return (
    <>
      {children}
      {tooltip && (
        <Tooltip key={uniqueId} anchor={anchor}>
          <span dangerouslySetInnerHTML={{ __html: tooltip }} />
        </Tooltip>
      )}
    </>
  );
};

export default TooltipProvider;
