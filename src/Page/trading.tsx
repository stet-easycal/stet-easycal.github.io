import { type ChangeEvent, useContext, useEffect, useState } from 'react';
import {
	Box,
	Grid,
	InputAdornment,
	TextField
} from '@mui/material';
import DataContext from '../Context/dataContext';
import CoinSelect from '../coinSelect.tsx';
import { t } from 'i18next';

const Trading = () => {
	const { stet, aud, chy } = useContext(DataContext);
	const [type, setType] = useState(0);
	const [total, setTotal] = useState('');
	const [coin, setCoin] = useState('');

	const list = {
		0: {
			name: 'AUD',
			logo: `/static/aud.svg`,
			rate: aud
		},
		1: {
			name: 'USD',
			logo: `/static/usd.svg`,
			rate: 1
		},
		2: {
			name: 'CHY',
			logo: `/static/chy.svg`,
			rate: chy
		},
	} as { [key: number]: { name: string, logo: string, rate: number } };

	useEffect(() => {
		const num = parseFloat(coin);

		if (!isNaN(num)) {
			setTotal((num / stet * list[type].rate).toFixed(4).toString());
		}
	}, [type, aud, chy]);

	const calcStet = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setCoin(value);
		const num = parseFloat(value);

		if (!isNaN(num)) {
			setTotal((num / stet * list[type].rate).toFixed(4).toString());
		}
	};

	const calcCoin = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setTotal(value);
		const num = parseFloat(value);

		if (!isNaN(num)) {
			setCoin((num * stet / list[type].rate).toFixed(4).toString());
		}
	};

	return (
			<Grid container spacing={2} sx={{ height: 100, width: '100%', px: 1 }}>
				<Grid size={12}>
					<CoinSelect setCoin={setType} />
				</Grid>

				{/* 左侧币种图标 */}
				<Grid size={2}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column', mt: 2 }}>
						<img
								style={{ height: 20 }}
								src={list[type].logo}
								alt={list[type].name}
						/>
					</Box>
				</Grid>

				{/* 法币输入框 */}
				<Grid size={10}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', mt: 2 }}>
						<TextField
								fullWidth
								variant="outlined"
								placeholder="0"
								value={total}
								sx={{ '& .MuiInputBase-root': { p: '5px' }, '& .MuiOutlinedInput-input': { p: '5px' } }}
								onChange={calcCoin}
								InputProps={{ endAdornment: <InputAdornment position="end" sx={{ mr: 1 }}>{list[type].name}</InputAdornment> }}
						/>
					</Box>
				</Grid>

				{/* 中间箭头 */}
				<Grid size={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
							 className="size-6">
						<path strokeLinecap="round" strokeLinejoin="round"
									d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
					</svg>
				</Grid>

				{/* STET 图标 */}
				<Grid size={2}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
						<img
								style={{ height: 25 }}
								src={`/static/stet.svg`}
								alt="STET"
						/>
					</Box>
				</Grid>

				{/* STET 输入框 */}
				<Grid size={10}>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
						<TextField
								fullWidth
								variant="outlined"
								placeholder="0"
								value={coin}
								sx={{ '& .MuiInputBase-root': { p: '5px' }, '& .MuiOutlinedInput-input': { p: '5px' } }}
								onChange={calcStet}
								InputProps={{ endAdornment: <InputAdornment position="end" sx={{ mr: 1 }}>STET</InputAdornment> }}
						/>
					</Box>
				</Grid>

				<Grid size={12} sx={{ mt: 5, fontSize: 12 }}>
					{t("notice")}
				</Grid>
			</Grid>
	);
};

export default Trading;