import * as yup from 'yup'

const userSchema = yup.object().shape({
  username: yup.string().trim().min(5).max(50).required('Username is required'),
  firstName: yup
    .string()
    .trim()
    .min(5)
    .max(50)
    .required('First name is required'),
  lastName: yup
    .string()
    .trim()
    .min(5)
    .max(50)
    .required('Last name is required'),
  email: yup
    .string()
    .trim()
    .min(5)
    .max(50)
    .email('Invalid email')
    .required('Email is required')
})

export default userSchema
