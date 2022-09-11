import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import css from "../input/input.module.css";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  valid?: boolean;
  error?: boolean | string;
  compact: boolean;
  autoSizing: true;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
};

const TextArea = ({
  label = "",
  className,
  valid,
  error,
  compact,
  value,
  onChange,
  onValueChange,
  autoSizing,
  ...props
}: Props) => {
  const innerRef = React.useRef<HTMLTextAreaElement>(null);

  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    onValueChange?.(e.target.value);
  };

  const updateTextAreaHeight = React.useCallback(() => {
    const container = innerRef.current;
    if (!autoSizing || !container) return;
    const field = container.querySelector("textarea");
    if (field) {
      field.style.height = "inherit";
      const computedStyle = window.getComputedStyle(field);
      const paddingTop = parseInt(
        computedStyle.getPropertyValue("padding-top") ?? 0
      );
      const paddingBottom = parseInt(
        computedStyle.getPropertyValue("padding-bottom") ?? 0
      );
      const height = paddingTop + field.scrollHeight + paddingBottom;
      field.style.height = `${height}px`;
    }
  }, [autoSizing]);

  React.useEffect(() => {
    updateTextAreaHeight();
  }, [updateTextAreaHeight]);

  const isValid = valid && !error;

  const classes = classnames(css.textarea, className, {
    [css.compact]: compact,
    [css.autoSizing]: autoSizing,
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
        <div
          // @ts-ignore
          ref={innerRef}
          className={css.fieldWrapper}
        >
          <textarea
            {...props}
            className={css.field}
            value={value}
            onChange={_onChange}
            onInput={updateTextAreaHeight}
            onFocus={updateTextAreaHeight}
            aria-invalid={isValid !== undefined && !isValid}
          />
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
export default TextArea;
