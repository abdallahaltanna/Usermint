import { ToastContainer } from 'react-toastify'
import { useMediaQuery, useTheme } from '@mui/material'
import type { FC } from 'react'

const MyToast: FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <ToastContainer
      position={isMobile ? 'top-center' : 'bottom-right'}
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  )
}

export default MyToast
