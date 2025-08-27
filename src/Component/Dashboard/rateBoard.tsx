import { Grid } from '@mui/material';
import { useContext } from 'react';
import DataContext from '../../Context/dataContext';
import Line from './line';

const RateBoard = () => {
  const { stet, aud, chy } = useContext(DataContext);

	const roundUp = (num: number, decimals: number) => {
		const factor = Math.pow(10, decimals);
		return (Math.ceil(num * factor) / factor).toFixed(decimals);
	}

  return (
    <Grid container sx={{ backgroundColor: 'white', borderRadius: '10px', mb: 2, p: 1, boxSizing: 'border-box' }}>
			<Line coin1="STET" coin2="USDC" rate={roundUp(stet, 0)} check={true} />
			<Line coin1="STET" coin2="USDT" rate={roundUp(stet, 0)} check={true} />
			<Line coin1="AUD" coin2="USD" rate={roundUp(aud, 4)} check={true} />
			<Line coin1="CHY" coin2="USD" rate={roundUp(chy, 4)}  check={false} />
    </Grid>
  );
}

export default RateBoard;