import * as React from "react";
import Tooltip from "./tooltip";

type Props = {
  children: React.ReactNode;
};

const ATTRIBUTE = "data-tooltip";

const getUniqueId = () => {
  return Math.floor((1 + Math.random()) * 0x10000);
};

const TooltipProvider = ({ children }: Props): JSX.Element => {
  const [uniqueId, setUniqueId] = React.useState<number | undefined>();
  const [anchor, setAnchor] = React.useState<Element | undefined>();
  const [tooltip, setTooltip] = React.useState<string | undefined>();

  const show: EventListener = (e) => {
    setUniqueId(getUniqueId());
    const target = e.target as Element;
    const element = target.closest(`[${ATTRIBUTE}]`);
    if (element) {
      const value = element.getAttribute(ATTRIBUTE);
      if (value) {
        setAnchor(element);
        setTooltip(value);
      }
    }
  };

  const hide = () => {
    setTooltip(undefined);
  };

  React.useEffect(() => {
    const targets = Array.from(document.querySelectorAll(`[${ATTRIBUTE}]`));
    targets.forEach((target) => {
      target.addEventListener("mouseenter", show);
      target.addEventListener("mouseleave", hide);
    });
    return () => {
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", show);
        target.removeEventListener("mouseleave", hide);
      });
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
