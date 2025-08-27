import { createContext } from 'react';

interface SnackbarContextProps {
  snackOpen: boolean;
  message: string;
  setSnackOpen: (open: boolean) => void;
  setMessage: (message: string) => void;
}

const SnackbarContext = createContext<SnackbarContextProps>({
  snackOpen: false,
  message: '',
  setSnackOpen: () => {},
  setMessage: () => {}
});

export default SnackbarContext;