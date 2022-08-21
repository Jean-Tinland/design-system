import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import css from "../input/input.module.css";

const Select = ({
  inputRef,
  label = "",
  name,
  options = [],
  className,
  valid,
  error,
  compact,
  value,
  autoFocus,
  placeholder,
  required,
  disabled,
  readOnly,
  onChange,
  onValueChange,
  inputProps = {},
}) => {
  const _onChange = (e) => {
    onChange?.(e);
    onValueChange?.(e.target.value);
  };

  const isValid = valid && !error;

  const classes = classnames(css.select, {
    [css.compact]: compact,
    [className]: className,
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
        <div className={css.outer}>
          <div className={css.inner}>
            <select
              ref={inputRef}
              name={name}
              className={css.field}
              value={value}
              onChange={_onChange}
              autoFocus={autoFocus}
              required={required}
              disabled={disabled}
              readOnly={readOnly}
              aria-invalid={isValid !== undefined && !isValid}
              {...inputProps}
            >
              {placeholder && (
                <option value="" disabled={required}>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option
                  key={option?.value ?? option}
                  value={option?.value ?? option}
                  disabled={options?.disabled}
                >
                  {option?.label ?? option}
                </option>
              ))}
            </select>
          </div>
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
