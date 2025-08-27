import { Box, Grid, Typography } from '@mui/material';

interface LineProps {
  coin1: string;
  coin2: string;
  rate: number | string;
  check: boolean;
}

const Line = ({ coin1, coin2, rate, check }: LineProps) => {

  const pic: {[key: string]: string} = {'AUDCO' : 'audco.png', 'USDT' : 'usdt.svg', 'BNB' : 'bnb.svg', 'AUD' : 'aud.svg', 'STET': 'stet.svg', 'USDC': 'usdc.svg', 'USD': 'usd.svg', 'CHY': 'chy.svg'};
  return (
      <>
        <Grid size={4} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: '6px',
          pb: '6px',
          borderBottom: check ? '1px solid #ebebeb' : ''
        }}>
          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1 }}>
            <img src={`/static/${pic[coin1]}`} alt="logo" style={{ height: 14 }}/>
          </Box>
          <Typography sx={{ width: 60, fontSize: 14 }}>{coin1}</Typography>
        </Grid>

        <Grid size={4} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: '6px',
          pb: '6px',
          borderBottom: check ? '1px solid #ebebeb' : ''
        }}>
          <Box sx={{ width: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', mr: 1 }}>
            <img src={`/static/${pic[coin2]}`} alt="logo" style={{ height: 14 }}/>
          </Box>
          <Typography sx={{ width: 60, fontSize: 14 }}>{coin2}</Typography>
        </Grid>

        <Grid size={4} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pt: '6px',
          pb: '6px',
          borderBottom: check ? '1px solid #ebebeb' : ''
        }}>
          <Typography sx={{ fontSize: 14 }}>{rate}</Typography>
      </Grid>
      </>
    )
}

export default Line;