import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { useContext, useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Language } from '@mui/icons-material';
import SnackbarContext from '../../Context/snackbarContext';
import i18n from '../../i18n';
import DataContext from '../../Context/dataContext.tsx';

const Update = () => {
	const { setSnackOpen, setMessage } = useContext(SnackbarContext);
  const [rotating, setRotating] = useState(false);
	const { refresh } = useContext(DataContext);

  const handleClick = () => {
		refresh();
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 500);
  };

  const handleLangClick = () => {
    if (i18n.language === 'zh') {
      i18n.changeLanguage('en');
      setMessage("Switched To English"); // 英文翻译
      setSnackOpen(true);
    } else {
      i18n.changeLanguage('zh');
      setMessage("切换到中文");
      setSnackOpen(true);
    }
  }

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, zIndex: 9999, bottom: 0, right: 0, position: 'fixed' }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 40, right: 6 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key="Update"
          icon={<RefreshIcon className={rotating ? "rotate" : ""} />}
          slotProps={{ tooltip: { title: "Update Data" } }}
          onClick={handleClick}
        />
        <SpeedDialAction
          key="lang"
          icon={<Language />}
          slotProps={{ tooltip: { title: "Switch Language" } }}
          onClick={handleLangClick}
        />
      </SpeedDial>
    </Box>
  )
}

export default Update;