import { Box, Typography, Modal, Backdrop, Fade } from '@mui/material'
import AddUserForm from './AddUserForm'
import type { FC } from 'react'
import type { ModalProps } from '../types/general'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '80%',
    sm: '80%',
    md: 400
  },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

const BasicModal: FC<ModalProps> = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false)

  return (
    <Modal
      data-test="modal"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Add New User
          </Typography>

          <AddUserForm handleClose={handleClose} />
        </Box>
      </Fade>
    </Modal>
  )
}

export default BasicModal
