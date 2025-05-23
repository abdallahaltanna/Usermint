import { TextField, Stack, Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import type { User } from '../types/user'
import userSchema from '../validations/userValidation'
import { yupResolver } from '@hookform/resolvers/yup'
import useUsers from '../store'
import { toast } from 'react-toastify'
import type { FC } from 'react'
import type { AddFormProps } from '../types/general'

const AddUserForm: FC<AddFormProps> = ({ handleClose }) => {
  const { addUser } = useUsers()

  const form = useForm<User>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  })

  const { register, handleSubmit, formState, reset } = form

  const { errors } = formState

  const onSubmit = (user: User) => {
    addUser(user)
    reset()
    handleClose()
    toast.success('User added successfully')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <TextField
          label="Username"
          data-test="username"
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          label="First Name"
          {...register('firstName')}
          data-test="firstname"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />
        <TextField
          label="Last Name"
          {...register('lastName')}
          data-test="lastname"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />
        <TextField
          label="Email"
          {...register('email')}
          data-test="email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            data-test="add-user-modal-btn"
          >
            Add
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default AddUserForm
