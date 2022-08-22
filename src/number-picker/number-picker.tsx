import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import Button from "../button";
import Input from "../input";
import css from "./number-picker.module.css";

type Props = {
  label?: string;
  className?: string;
  min?: number;
  max?: number;
  value: number;
  disabled: boolean;
  onChange: (value: number) => void;
  withInput?: boolean;
};

const subtract = (value: number, min: number, max: number, onChange) => () => {
  changeValue(value, -1, min, max, onChange);
};

const add = (value: number, min: number, max: number, onChange) => () => {
  changeValue(value, 1, min, max, onChange);
};

const update = (min: number, max: number, onChange) => (value) => {
  changeValue(value, 0, min, max, onChange);
};

const changeValue = (
  value: number,
  step: number,
  min: number,
  max: number,
  onChange
) => {
  const newValue = value + step;
  switch (true) {
    case newValue >= min && newValue <= max:
      onChange(newValue);
      break;
    case newValue < min:
      onChange(min);
      break;
    case newValue > max:
      onChange(max);
      break;
  }
};

const isBelow = (val, min, disabled) => disabled || val <= min;

const isAbove = (val, max, disabled) => disabled || val >= max;

const NumberPicker = ({
  label,
  className,
  min = 0,
  max = Infinity,
  value,
  disabled,
  onChange,
  withInput,
}: Props) => {
  const classes = classnames(css.picker, className, {
    [css.active]: value > 0,
    [css.disabled]: disabled,
    [css.withInput]: withInput,
  });

  const valueLength = value.toString().length;
  const inputSize = valueLength < 2 ? 2 : valueLength;

  return (
    <div className={classes}>
      {label && <div className={css.label}>{label}</div>}
      <div className={css.inner}>
        <Button
          onClick={subtract(value, min, max, onChange)}
          disabled={isBelow(value, min, disabled)}
          compact
        >
          <Icons.Minus />
        </Button>
        {withInput ? (
          <Input
            type="text"
            value={value}
            onValueChange={update(min, max, onChange)}
            className={css.value}
            compact
            size={inputSize}
          />
        ) : (
          <span className={css.value}>{value}</span>
        )}
        <Button
          onClick={add(value, min, max, onChange)}
          disabled={isAbove(value, max, disabled)}
          compact
        >
          <Icons.Plus />
        </Button>
      </div>
    </div>
  );
};

export default NumberPicker;
