import * as React from "react";
import Snackbar from "./snackbar";

type Timeout = ReturnType<typeof setTimeout>;

type Props = {
  children: React.ReactNode;
};

type SnackbarProps = {
  type?: "success" | "error" | "warning" | "information";
  showIcon?: boolean;
  delay?: number;
  message?: string;
  filler?: boolean;
  showCloseButton?: boolean;
};

const CLOSING_DELAY = 320;
const DEFAULT_DELAY = 4500;

const SnackbarContext = React.createContext({});

export const useSnackbar = () => {
  const context = React.useContext(SnackbarContext);
  if (!context)
    throw new Error(`useSnackbar must be used within a SnackbarProvider`);
  return context;
};

const getUniqueId = () => {
  return Math.floor((1 + Math.random()) * 0x10000);
};

const SnackbarProvider = ({ children }: Props): JSX.Element => {
  const [uniqueId, setUniqueId] = React.useState<number | undefined>();
  const [snackbar, setSnackbar] = React.useState<SnackbarProps | undefined>();
  const [closing, setClosing] = React.useState(false);
  const [visibilityTimeout, setVisibilityTimeout] = React.useState<
    Timeout | undefined
  >();
  const [delayedVisibilityTimeout, setDelayedVisibilityTimeout] =
    React.useState<Timeout | undefined>();
  const [closingTimeout, setClosingTimeout] = React.useState<
    Timeout | undefined
  >();

  const delay = snackbar?.delay || DEFAULT_DELAY;

  const hide = () => {
    clearTimeout(closingTimeout);
    setClosing(true);
    setClosingTimeout(
      setTimeout(() => {
        setClosing(false);
        setSnackbar(undefined);
        setClosingTimeout(undefined);
        setUniqueId(undefined);
      }, CLOSING_DELAY)
    );
  };

  const show = (options = {}) => {
    clearTimeout(visibilityTimeout);
    clearTimeout(delayedVisibilityTimeout);
    if (snackbar) {
      hide();
      setDelayedVisibilityTimeout(
        setTimeout(() => {
          setSnackbar(options);
          setUniqueId(getUniqueId());
        }, CLOSING_DELAY)
      );
      setVisibilityTimeout(
        setTimeout(() => {
          hide();
          setVisibilityTimeout(undefined);
        }, delay + CLOSING_DELAY)
      );
    } else {
      setSnackbar(options);
      setUniqueId(getUniqueId());
      setVisibilityTimeout(
        setTimeout(() => {
          hide();
          setVisibilityTimeout(undefined);
        }, delay)
      );
    }
  };

  return (
    <SnackbarContext.Provider value={{ show, hide }}>
      {children}
      {snackbar && (
        <Snackbar key={uniqueId} {...snackbar} closing={closing} close={hide} />
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
