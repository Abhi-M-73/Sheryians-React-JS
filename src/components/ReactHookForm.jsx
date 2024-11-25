import React from 'react'
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-5 w-96 p-8 bg-gray-700 shadow-lg rounded'>
      <h1 className='text-3xl font-extrabold text-center mb-5'>Form Handling</h1>
      <input {...register("username" , { required: "Username is required" })} type="text" placeholder='Username' className='rounded p-2 bg-gray-800' name='username' />
      {
        errors.username && <h1 className='text-red-500 font-bold mt-1'>{errors.username.message}</h1>  
      }
      <input {...register("email", { required: "Email is required" })} type="email" placeholder='email' className='rounded p-2 bg-gray-800' name='email' />
      {
        errors.email && <h1 className='text-red-500 font-bold mt-1'>{errors.email.message}</h1>  
      }
      <input {...register("password", { required: "Password is required" })} type="text" placeholder='Password' className='rounded p-2 bg-gray-800' name='password' />
      {
        errors.password && <h1 className='text-red-500 font-bold'>{errors.password.message}</h1>  
      }
      
      <button className='px-6 py-2 rounded bg-indigo-600'>Submit</button>
    </form>
  )
}

export default ReactHookForm;
