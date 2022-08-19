import * as React from "react";
import classnames from "classnames";
import css from "./button.module.css";

const Button = React.forwardRef(
  (
    {
      type = "button",
      className,
      StartIcon,
      EndIcon,
      compact,
      children,
      ...props
    },
    ref
  ) => {
    const classes = classnames(css.button, {
      [className]: className,
      [css.compact]: compact,
      [css.iconOnly]: !children,
    });

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        {StartIcon && <StartIcon className={css.icon} />}
        {children}
        {EndIcon && <EndIcon className={css.icon} />}
      </button>
    );
  }
);

export default Button;
