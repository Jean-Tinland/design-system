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

  const show: EventListener = React.useCallback(
    (e) => {
      const target = e.target as Element;
      const element = target.closest(`[${ATTRIBUTE}]`);
      if (element) {
        const value = element.getAttribute(ATTRIBUTE);
        if (value) {
          setAnchor((previous) => {
            if (previous !== element) {
              setUniqueId(getUniqueId());
            }
            return element;
          });
          setTooltip(value);
        }
      }
    },
    [anchor]
  );

  const hide = () => {
    setTooltip(undefined);
  };

  const hover: EventListener = React.useCallback(
    (e) => {
      requestAnimationFrame(() => {
        const target = e.target as Element;
        if (target) {
          const hoveredTooltip = target.closest(`[${ATTRIBUTE}]`);
          if (hoveredTooltip) {
            show(e);
          } else {
            hide();
          }
        }
      });
    },
    [anchor]
  );

  React.useEffect(() => {
    window.addEventListener("mouseover", hover);
    return () => {
      window.removeEventListener("mouseover", hover);
    };
  }, [hover]);

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
