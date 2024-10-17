import { string, object } from 'yup'

const userSchema = object({
  email: string()
    .email('Please enter a valid email')
    .required('Email  is required'),
  password: string()
    .required('Please enter a valid password')
    .min(8, 'Password should not be less than 8 characters'),
})

export { userSchema }
