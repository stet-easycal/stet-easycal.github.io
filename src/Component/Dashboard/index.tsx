import { Box } from '@mui/material';
import RateBoard from './rateBoard';
import type { FC, ReactNode } from 'react';

const Dashboard: FC<{
  children: ReactNode;
}> = ({ children }) => {

  return (
    <Box sx={{
      position: 'fixed',
      top: '7%',
      pt: 2,
      pl: 2,
      pr: 2,
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <RateBoard />
      <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.99)', borderRadius: '10px', paddingTop: 2 }}>
        <Box sx={{
          minHeight: 400,
          height: '94vh',
          width: '100%',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          display: 'flex',
          overflow: 'auto',
          boxSizing: 'border-box',
          p: 1,
          overflowY: 'auto'
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
