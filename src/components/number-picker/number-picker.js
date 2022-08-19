import * as React from "react";
import classnames from "classnames";
import * as Icons from "../icons";
import Button from "../button";
import Input from "../input";
import css from "./number-picker.module.css";

const subtract = (value, min, max, onChange) => () => {
  changeValue(value, -1, min, max, onChange);
};

const add = (value, min, max, onChange) => () => {
  changeValue(value, 1, min, max, onChange);
};

const update = (min, max, onChange) => (value) => {
  changeValue(value, 0, min, max, onChange);
};

const changeValue = (value, step, min, max, onChange) => {
  const newValue = parseInt(value) + step;
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
}) => {
  const classes = classnames(css.picker, {
    [className]: className,
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
          StartIcon={Icons.Minus}
          disabled={isBelow(value, min, disabled)}
          aria-label="Minus"
          compact
        />
        {withInput ? (
          <Input
            type="text"
            value={value}
            onChange={update(min, max, onChange)}
            className={css.value}
            compact
            inputProps={{ size: inputSize }}
          />
        ) : (
          <span className={css.value}>{value}</span>
        )}
        <Button
          onClick={add(value, min, max, onChange)}
          StartIcon={Icons.Plus}
          disabled={isAbove(value, max, disabled)}
          aria-label="Plus"
          compact
        />
      </div>
    </div>
  );
};

export default NumberPicker;
