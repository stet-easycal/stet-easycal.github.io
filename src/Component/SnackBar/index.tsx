import { Fragment, useContext } from 'react';
import { Button, Snackbar } from '@mui/material';
import snackbarContext from '../../Context/snackbarContext';
import { t } from 'i18next';

const SnackBar = () => {
  const { snackOpen, setSnackOpen, message } = useContext(snackbarContext);

  return (
    <Snackbar
      open={snackOpen}
      autoHideDuration={2000}
      onClose={() => setSnackOpen(false)}
      message={message}
      action={
        <Fragment>
          <Button onClick={() => setSnackOpen(false)} sx={{ color: 'white' }}>{t("close")}</Button>
        </Fragment>
      }
    />
  );
}

export default SnackBar;