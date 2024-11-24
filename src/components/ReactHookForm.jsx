import React from 'react'
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {

  const {register, handleSubmit} = useForm();

  const submitHandler = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-5 w-96 p-6 bg-gray-700 shadow-lg rounded'>
      <h1 className='text-3xl font-extrabold text-center mb-5'>Form Handling</h1>
        <input {...register("username")} type="text" placeholder='Username' className='rounded p-2 bg-gray-800' name='username' />
        <input {...register("password")} type="text" placeholder='Password' className='rounded p-2 bg-gray-800' name='password' />
        <input {...register("age")} type="text" placeholder='Age' className='rounded p-2 bg-gray-800' name='age' />
        <button className='px-6 py-2 rounded bg-indigo-600'>Submit</button>
      </form>
  )
}

export default ReactHookForm;
