import * as React from "react";
import classnames from "classnames";
import css from "./checkbox.module.css";

const Checkbox = ({
  label,
  className,
  onChange,
  onValueChange,
  value,
  disabled,
  required,
  inputProps,
}) => {
  const _onChange = (e) => {
    onChange?.(e);
    onValueChange?.(e.target.value);
  };

  const classes = classnames(css.field, {
    [css.disabled]: disabled,
    [className]: className,
  });

  return (
    <label className={classes}>
      <input
        className={css.checkbox}
        onChange={_onChange}
        type="checkbox"
        checked={value}
        disabled={disabled}
        required={required}
        {...inputProps}
      />
      <span className={css.checkmark} />
      <div className={css.label}>{label}</div>
    </label>
  );
};

export default Checkbox;
