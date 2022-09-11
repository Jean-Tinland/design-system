import * as React from "react";
import classnames from "classnames";
import Checkbox from "../checkbox";
import Dropdown from "../dropdown";
import * as Icons from "../icons";
import css from "./multiple-select.module.css";
import cssInput from "../input/input.module.css";

type Option =
  | string
  | {
      label: string;
      value: string;
      disabled?: boolean;
    };

type Props = {
  label: string;
  icon?: keyof typeof Icons | React.FC;
  options: Option[];
  values: Option[];
  className?: string;
  valid?: boolean;
  error?: boolean | string;
  compact?: boolean;
  onChange: (values: Option[]) => void;
  defaultOpened?: boolean;
  onOpen?: (opened: boolean) => void;
  align?: "left" | "right";
  uniqueChoice: boolean;
};

const getNewValues = (
  option: Option,
  values: Option[],
  uniqueChoice: boolean
) => {
  const isString = typeof option === "string";
  const value = isString ? option : option.value;

  const isSelected = values.some((o) => {
    const isString = typeof o === "string";
    return isString ? o === value : o.value === value;
  });

  if (uniqueChoice) {
    return isSelected ? [] : [option];
  }

  return isSelected
    ? values.filter((v) => {
        const isString = typeof v === "string";
        return isString ? v !== value : v.value !== value;
      })
    : [...values, option];
};

const MultipleSelect = ({
  label = "",
  icon,
  options = [],
  values = [],
  className,
  valid,
  error,
  compact,
  onChange,
  defaultOpened = false,
  onOpen,
  align = "left",
  uniqueChoice = false,
  ...props
}: Props) => {
  const ref = React.useRef<HTMLElement>(null);
  const dropdownRef = React.useRef<HTMLElement>(null);
  const [opened, setOpened] = React.useState(defaultOpened);
  const isValid = valid && !error;

  const closeOnOutsideClick: EventListener = React.useCallback(
    (e) => {
      const target = e.target as Element;
      if (
        ref.current?.contains(target) ||
        dropdownRef.current?.contains(target)
      )
        return;
      setOpened(false);
    },
    [setOpened]
  );

  const _onChange = (option: Option) => () => {
    const newValues = getNewValues(option, values, uniqueChoice);
    onChange?.(newValues);
    if (uniqueChoice) {
      toggleDropdown();
    }
  };

  const Icon = icon
    ? typeof icon === "string"
      ? Icons[icon] || null
      : icon
    : null;

  const valueLabel = values
    .map((value) => {
      const isString = typeof value === "string";
      if (isString) return value;
      return value.label;
    })
    .sort((a, b) => {
      const indexOfA = options.findIndex((option) => {
        const isString = typeof option === "string";
        return isString ? a === option : a === option.label;
      });
      const indexOfB = options.findIndex((option) => {
        const isString = typeof option === "string";
        return isString ? b === option : b === option.label;
      });
      return indexOfA - indexOfB;
    })
    .join(", ");

  const toggleDropdown = () => {
    const newOpenedValue = !opened;
    setOpened(newOpenedValue);
    onOpen?.(newOpenedValue);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closeOnOutsideClick);
    return () =>
      document.body.removeEventListener("click", closeOnOutsideClick);
  }, [closeOnOutsideClick]);

  const classes = classnames(cssInput.select, css.select, className, {
    [cssInput.withIcon]: !!Icon,
    [cssInput.compact]: compact,
    [cssInput.valid]: isValid,
    [cssInput.error]: error,
    [css.alignDropdownToRight]: align === "right",
    [css.opened]: opened,
  });

  return (
    <div
      // @ts-ignore
      ref={ref}
      className={classes}
    >
      <label className={cssInput.label}>
        {(label || isValid) && (
          <span className={cssInput.labelText}>
            {label}
            {isValid && <Icons.Check className={cssInput.validIndicator} />}
          </span>
        )}
        <div className={cssInput.fieldWrapper}>
          {Icon && <Icon />}
          <input
            type="text"
            {...props}
            className={cssInput.field}
            value={valueLabel}
            aria-invalid={isValid !== undefined && !isValid}
            onClick={toggleDropdown}
            readOnly
          />
        </div>
      </label>
      {error && (
        <div className={cssInput.errorMessage} role="alert">
          <Icons.XCircle className={cssInput.errorIndicator} />
          {error}
        </div>
      )}
      {opened && (
        <Dropdown
          ref={dropdownRef}
          anchorRef={ref}
          innerClassName={css.dropdownInner}
          onClose={setOpened}
        >
          {options.map((option) => {
            const isString = typeof option === "string";
            const label = isString ? option : option.label;
            const value = isString ? option : option.value;
            const disabled = !isString && option.disabled;

            const isSelected = values.find((o) => {
              const isString = typeof o === "string";
              return isString ? o === value : o.value === value;
            });

            const classes = classnames(css.option, {
              [css.optionSelected]: isSelected,
            });

            return (
              <div key={value} role="listitem">
                <Checkbox
                  label={label}
                  className={classes}
                  checked={!!isSelected}
                  onChange={_onChange(option)}
                  disabled={disabled}
                  tabIndex={opened ? 0 : -1}
                />
              </div>
            );
          })}
        </Dropdown>
      )}
    </div>
  );
};

export default MultipleSelect;
