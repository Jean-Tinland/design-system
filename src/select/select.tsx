import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import css from "../input/input.module.css";

type Option =
  | string
  | {
      label: string;
      value: string;
      disabled?: boolean;
    };

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  icon?: keyof typeof Icons | React.FC;
  options: Option[];
  valid?: boolean;
  error?: boolean | string;
  compact?: boolean;
  onValueChange?: (value: string) => void;
};

const Select = ({
  label = "",
  icon,
  options = [],
  className,
  valid,
  error,
  compact,
  value,
  placeholder,
  onChange,
  onValueChange,
  ...props
}: Props) => {
  const isValid = valid && !error;

  const _onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
    onValueChange?.(e.target.value);
  };

  const Icon = icon
    ? typeof icon === "string"
      ? Icons[icon] || null
      : icon
    : null;

  const classes = classnames(css.select, className, {
    [css.withIcon]: !!Icon,
    [css.compact]: compact,
    [css.valid]: isValid,
    [css.error]: error,
  });

  return (
    <div className={classes}>
      <label className={css.label}>
        {(label || isValid) && (
          <span className={css.labelText}>
            {label}
            {isValid && <Icons.Check className={css.validIndicator} />}
          </span>
        )}
        <div className={css.fieldWrapper}>
          {Icon && <Icon />}
          <select
            className={css.field}
            value={value}
            onChange={_onChange}
            aria-invalid={isValid !== undefined && !isValid}
            {...props}
          >
            {placeholder && (
              <option value="" disabled={props.required}>
                {placeholder}
              </option>
            )}
            {options.map((option: Option) => {
              if (typeof option === "string") {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              }
              const { label, value, disabled } = option;
              return (
                <option key={value} value={value} disabled={disabled}>
                  {label}
                </option>
              );
            })}
          </select>
        </div>
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
export default Select;
