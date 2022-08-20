import * as React from "react";
import classnames from "classnames";
import css from "./checkbox.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedChange?: (value: boolean) => void;
  children: React.ReactNode;
};

const Checkbox = ({
  label,
  className,
  onChange,
  onCheckedChange,
  checked,
  disabled,
  required,
}: Props) => {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    onCheckedChange?.(e.target.checked);
  };

  const classes = classnames(css.field, className, {
    [css.disabled]: disabled,
  });

  return (
    <label className={classes}>
      <input
        className={css.checkbox}
        onChange={_onChange}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        required={required}
      />
      <span className={css.checkmark} />
      <div className={css.label}>{label}</div>
    </label>
  );
};

export default Checkbox;
