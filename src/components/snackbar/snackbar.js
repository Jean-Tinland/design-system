import * as React from "react";
import * as ReactDOM from "react-dom";
import classnames from "classnames";
import * as Icons from "../icons";
import css from "./snackbar.module.css";

const icons = {
  success: Icons.CheckCircle,
  error: Icons.AlertCircle,
  warning: Icons.AlertTriangle,
  information: Icons.Info,
};

const Snackbar = ({
  type = "information",
  showIcon = true,
  delay = 4500,
  message,
  filler = true,
  showCloseButton = true,
  close,
  closing,
}) => {
  const Icon = icons[type] || icons.information;

  const classes = classnames(css.root, {
    [css[type]]: type,
    [css.filler]: filler,
    [css.closing]: closing,
  });

  const styles = filler ? { "--filler-duration": `${delay}ms` } : undefined;

  return ReactDOM.createPortal(
    <div className={classes} style={styles}>
      <div className={css.message}>
        {showIcon && <Icon className={css.icon} />}
        <div className={css.text}>{message}</div>
      </div>
      {showCloseButton && (
        <button className={css.close} onClick={() => close()}>
          <Icons.Cross className={css.closeIcon} />
        </button>
      )}
    </div>,
    document.body
  );
};

export default Snackbar;
