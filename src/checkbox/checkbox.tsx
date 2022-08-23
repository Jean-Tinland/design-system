import * as React from "react";
import classnames from "classnames";
import css from "./checkbox.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  appearance?: "checkbox" | "switch";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheckedChange?: (value: boolean) => void;
};

const Checkbox = ({
  label,
  className,
  onChange,
  onCheckedChange,
  checked,
  disabled,
  required,
  appearance = "checkbox",
  ...props
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
        {...props}
      />
      {appearance === "checkbox" && <span className={css.checkmark} />}
      {appearance === "switch" && <span className={css.switch} />}
      <div className={css.label}>{label}</div>
    </label>
  );
};

export default Checkbox;
