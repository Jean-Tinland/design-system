import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import DateInput from "./date-input";
import css from "./input.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: keyof typeof Icons | React.FC;
  valid?: boolean;
  error?: boolean | string;
  compact?: boolean;
  hidden?: boolean;
  onValueChange?: (value: string) => void;
};

const Input = ({
  type = "text",
  label = "",
  icon,
  className,
  valid,
  error,
  compact,
  hidden,
  value,
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

  const Icon = icon
    ? typeof icon === "string"
      ? Icons[icon] || null
      : icon
    : null;

  const classes = classnames(css.input, className, {
    [css.withIcon]: !!Icon,
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
          <DateInput fieldRef={ref} {...props} />
        ) : (
          <div className={css.fieldWrapper}>
            {Icon && <Icon />}
            <input
              type={type}
              className={css.field}
              value={value}
              onChange={_onChange}
              aria-invalid={isValid !== undefined && !isValid}
              {...props}
            />
          </div>
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
