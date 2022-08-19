import * as React from "react";
import Snackbar from "./snackbar";

const CLOSING_DELAY = 320;
const DEFAULT_DELAY = 4500;

const SnackbarContext = React.createContext();

export const useSnackbar = () => {
  const context = React.useContext(SnackbarContext);
  if (!context)
    throw new Error(`useSnackbar must be used within a SnackbarProvider`);
  return context;
};

const getUniqueId = () => {
  return Math.floor((1 + Math.random()) * 0x10000);
};

const SnackbarProvider = (props) => {
  const [uniqueId, setUniqueId] = React.useState();
  const [snackbar, setSnackbar] = React.useState();
  const [closing, setClosing] = React.useState(false);
  const [visibilityTimeout, setVisibilityTimeout] = React.useState();
  const [delayedVisibilityTimeout, setDelayedVisibilityTimeout] =
    React.useState();
  const [closingTimeout, setClosingTimeout] = React.useState();

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
    <SnackbarContext.Provider value={{ show, hide }} {...props}>
      {props.children}
      {snackbar && (
        <Snackbar key={uniqueId} {...snackbar} closing={closing} close={hide} />
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
