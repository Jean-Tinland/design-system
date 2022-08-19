import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import DateInput from "./date-input";
import css from "./input.module.css";

const Input = ({
  inputRef,
  type = "text",
  label = "",
  name,
  placeholder,
  className,
  valid,
  error,
  compact,
  value,
  autoFocus,
  required,
  disabled,
  readOnly,
  onChange,
  onValueChange,
  inputProps = {},
  children,
  hidden,
}) => {
  const ref = React.useRef();

  const isDate = type === "date";
  const isValid = valid && !error;

  const _onChange = (e) => {
    onChange?.(e);
    onValueChange?.(e.target.value);
  };

  const classes = classnames(css.input, {
    [css.hidden]: hidden,
    [css.compact]: compact,
    [css.date]: isDate,
    [className]: className,
    [css.valid]: isValid,
    [css.error]: error,
  });

  return (
    <div ref={ref} className={classes}>
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
          <DateInput
            name={name}
            value={value}
            onChange={onChange}
            onValueChange={onValueChange}
            placeholder={placeholder}
            fieldRef={ref}
            inputRef={inputRef}
            inputProps={inputProps}
          />
        ) : (
          <input
            ref={inputRef}
            type={type}
            name={name}
            className={css.field}
            value={value}
            onChange={_onChange}
            placeholder={placeholder}
            required={required}
            autoFocus={autoFocus}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={isValid !== undefined && !isValid}
            {...inputProps}
          />
        )}
        {children}
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
