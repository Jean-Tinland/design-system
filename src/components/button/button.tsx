import * as React from "react";
import classnames from "classnames";
import css from "./button.module.css";

type Props = (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
) & {
  tag?: "button" | "a";
  compact?: boolean;
  children: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ tag = "button", className, compact, children, ...props }, ref) => {
    const classes = classnames(css.button, className, {
      [css.compact]: compact,
    });

    return (
      <button
        // @ts-ignore
        ref={ref}
        {...props}
        className={classes}
        tabIndex={tag === "a" ? 0 : undefined}
      >
        {children}
      </button>
    );
  }
);

export default Button;
