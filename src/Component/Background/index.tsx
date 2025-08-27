import { Box } from '@mui/material';

const Background = () => {
  return (
			<Box
					sx={{
						width: '100vw',
						height: '60%',
						top: 0,
						left: 0,
						position: 'fixed',
						zIndex: -9999,
						background: 'linear-gradient(75deg, #1c3fda 0%, #0099cc 50%, #01c26e 100%)',
						borderBottomLeftRadius: '15px',
						borderBottomRightRadius: '15px',
					}}
			/>
  )
}

export default Background;