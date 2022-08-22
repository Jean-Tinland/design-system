import * as React from "react";
import DatePicker from "../date-picker";
import css from "./input.module.css";
import DateInputWrapper from "./date-input-wrapper";
import Input from "./input";
import * as Utils from "./utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  fieldRef: React.RefObject<HTMLInputElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (value: string) => void;
};

const DateInput = ({
  fieldRef,
  inputRef,
  value,
  min,
  max,
  placeholder = "JJ/MM/AAAA",
  onChange,
  onValueChange,
  ...props
}: Props) => {
  const datePickerRef = React.useRef<HTMLElement>(null);
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);

  const dateValue = value && value !== "undefined" && new Date(value as string);

  const _onChange = (value: string) => {
    if (inputRef.current) {
      Utils.triggerInputChange(inputRef.current, value);
    }
  };

  const closeOnOutsideClick: EventListener = React.useCallback(
    (e) => {
      if (datePickerVisible) {
        const target = e.target as Element;
        if (
          fieldRef.current?.contains(target) ||
          datePickerRef.current?.contains(target)
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

  const formatedValue = dateValue
    ? dateValue.toLocaleDateString("fr-FR")
    : placeholder;

  return (
    <>
      <input
        className={css.hidden}
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
      />
      <Input
        type="text"
        icon="Calendar"
        className={css.dateField}
        onClick={toggleDatePicker}
        value={formatedValue}
        readOnly
        {...props}
        onChange={undefined}
      />
      {datePickerVisible && (
        <DateInputWrapper fieldRef={fieldRef}>
          <DatePicker
            ref={datePickerRef}
            className={css.datePicker}
            min={min}
            max={max}
            value={value}
            onChange={_onChange}
          />
        </DateInputWrapper>
      )}
    </>
  );
};

export default DateInput;
