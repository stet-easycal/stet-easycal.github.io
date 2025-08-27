import { Box, Toolbar, Typography } from '@mui/material';


const CustomerAppBar = () => {
  return (
			<Toolbar sx={{ position: 'relative', minHeight: 80 }}>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<img
							src={`/static/stet.svg`}
							alt="logo"
							style={{ height: 32 }}
					/>
				</Box>

				<Typography
						variant="h6"
						sx={{
							color: 'white',
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
						}}
				>
					EasyCal
				</Typography>

				<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				</Box>
			</Toolbar>
  )
}

export default CustomerAppBar;