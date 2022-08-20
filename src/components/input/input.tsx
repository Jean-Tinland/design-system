import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import DateInput from "./date-input";
import css from "./input.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  valid?: boolean;
  error?: boolean | string;
  compact?: boolean;
  autoSizing?: true;
  min?: string;
  max?: string;
  onValueChange?: (value: string) => void;
  hidden?: boolean;
};

const Input = ({
  type = "text",
  label = "",
  className,
  valid,
  error,
  compact,
  value,
  hidden,
  min,
  max,
  onChange,
  onValueChange,
  ...props
}: Props) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const isDate = type === "date";
  const isValid = valid && !error;

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onValueChange?.(e.target.value);
  };

  const classes = classnames(css.input, className, {
    [css.hidden]: hidden,
    [css.compact]: compact,
    [css.date]: isDate,
    [css.valid]: isValid,
    [css.error]: error,
  });

  return (
    <div
      // @ts-ignore
      ref={ref}
      className={classes}
    >
      <label className={css.label}>
        {(label || (isValid && !error)) && (
          <span className={css.labelText}>
            {label}
            {isValid && !error && (
              <Icons.Check className={css.validIndicator} />
            )}
          </span>
        )}
        {isDate ? (
          <DateInput fieldRef={ref?.current} min={min} max={max} {...props} />
        ) : (
          <input
            type={type}
            className={css.field}
            value={value}
            onChange={_onChange}
            aria-invalid={isValid !== undefined && !isValid}
            {...props}
          />
        )}
      </label>
      {error && (
        <div className={css.errorMessage} role="alert">
          <Icons.XCircle className={css.errorIndicator} />
          {error}
        </div>
      )}
    </div>
  );
};
export default Input;
