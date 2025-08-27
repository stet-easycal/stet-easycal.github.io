import { createContext } from 'react';

interface DialogContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextProps>({
  open: false,
  setOpen: () => {}
});

export default DialogContext;