// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'

const FallbackSpinner = ({ sx }: { sx?: BoxProps['sx'] }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <img src='/images/logo.png' alt='logo' width={50} height={50}/>
      <CircularProgress disableShrink sx={{ mt: 6, color:'#00ffcc' }} />
    </Box>
  )
}

export default FallbackSpinner
