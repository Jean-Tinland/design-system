import * as React from "react";
import classnames from "classnames";
import css from "./button.module.css";

type Props = (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
) & {
  tag?: "button" | "a";
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  compact?: boolean;
  children?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      tag = "button",
      variant = "primary",
      className,
      compact,
      children,
      ...props
    },
    ref
  ) => {
    const classes = classnames(css.button, className, css[variant], {
      [css.compact]: compact,
      [css.iconOnly]: typeof children === "object",
    });

    const Tag = tag;

    return (
      <Tag
        // @ts-ignore
        ref={ref}
        {...props}
        className={classes}
        tabIndex={tag === "a" ? 0 : undefined}
      >
        {children}
      </Tag>
    );
  }
);

Button.displayName = "Button";

export default Button;
