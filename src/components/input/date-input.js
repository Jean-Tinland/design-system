import * as React from "react";
import classnames from "classnames";
import DatePicker from "../date-picker";
import * as Icons from "../icons";
import css from "./input.module.css";
import DateInputWrapper from "./date-input-wrapper";
import Input from "./input";
import * as Utils from "./utils";

const DateInput = ({
  fieldRef,
  inputRef,
  name,
  value,
  onChange,
  onValueChange,
  placeholder = "JJ/MM/AAAA",
  inputProps,
}) => {
  const datePickerRef = React.useRef();
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);

  const ref = inputRef || React.createRef();

  const _onChange = (value) => {
    if (ref.current) {
      Utils.triggerInputChange(ref.current, value);
    }
  };

  const closeOnOutsideClick = React.useCallback(
    (e) => {
      if (datePickerVisible) {
        if (
          fieldRef.current?.contains(e.target) ||
          datePickerRef.current?.contains(e.target)
        ) {
          return;
        }
        setDatePickerVisible(false);
      }
    },
    [datePickerVisible, fieldRef]
  );

  const toggleDatePicker = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", closeOnOutsideClick);
    return () =>
      document.body.removeEventListener("click", closeOnOutsideClick);
  }, [closeOnOutsideClick]);

  const formatedValue =
    value && value !== "undefined"
      ? new Date(value).toLocaleDateString("fr-FR")
      : placeholder;

  return (
    <>
      <Input
        name={name}
        inputRef={ref}
        type="text"
        value={value}
        onChange={onChange}
        onValueChange={onValueChange}
        hidden
      />
      <Input
        type="text"
        className={css.dateField}
        inputProps={{ onClick: toggleDatePicker }}
        value={formatedValue}
        readOnly
      >
        <Icons.Calendar className={css.calendarIcon} />
      </Input>
      {datePickerVisible && (
        <DateInputWrapper container={fieldRef?.current}>
          <DatePicker
            ref={datePickerRef}
            className={css.datePicker}
            min={inputProps?.min}
            max={inputProps?.max}
            value={value}
            onChange={_onChange}
          />
        </DateInputWrapper>
      )}
    </>
  );
};

export default DateInput;
