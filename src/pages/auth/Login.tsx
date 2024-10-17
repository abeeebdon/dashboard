import { userSchema } from '@/features/authValidate'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
interface FormData {
  email: string
  password: string
}
const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userSchema), // integrating yup schema with React Hook Form
  })

  const navigate = useNavigate()
  //

  //
  const submitForm = (data: FormData) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigate('/dashboard')
    }, 1000)
    console.log('Form submitted', data)
    setFormData(data)
    console.log(formData)
  }
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <article className="border p-6 w-full max-w-[450px] shadow border-gray-200 rounded-lg">
        <div className="my-4">
          <h2 className="text-center font-bold text-[32px] leading-10">Comp</h2>
          <p className="w-9/12 mx-auto">
            The leading industry in promotion and management
          </p>
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-4 p-4 shadow  rounded-lg"
        >
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email ">Email</label>
            <input
              id="email"
              {...register('email')}
              placeholder="Please enter your email"
              className="p-2 w-full rounded-lg outline-none border-none"
            />
            <p className="text-red-500 text-[14px]">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              {...register('password')}
              placeholder="please input your password"
              className="p-2 w-full rounded-lg outline-none border-none"
            />
            <p className="text-red-500 text-[14px]">
              {errors.password?.message}
            </p>
          </div>
          <button
            type="submit"
            className="bg-white flex justify-center p-1 w-full rounded-lg outline-none border-none text-green-300 font-bold text-[16px] leading-7"
          >
            {isLoading ? (
              <img src="/sp.gif" alt="loading..." className="h-10 w-10" />
            ) : (
              'Login'
            )}
          </button>
        </form>
      </article>
    </section>
  )
}

export default Login
