import React, { useState } from 'react';

const FormHandling = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
      gender,
      city,
    }
    console.log(data);
  }


  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const { username, password } = e.target;
  //   const data = {
  //     username: username.value,
  //     password: password.value,
  //   }
  //   console.log(data);
  // }

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-5 w-96 p-6 bg-gray-700 shadow-lg rounded'>
      <h1 className='text-3xl font-extrabold text-center mb-5'>Form Handling</h1>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' className='rounded p-2 bg-gray-800' name='username' />
        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' className='rounded p-2 bg-gray-800' name='password' />
        <div className='flex items-center gap-2 '>Gender : 
        Male<input type="radio" name='gender' value={"Male"} onChange={(e)=> setGender(e.target.value)}/> Female <input type="radio" name='gender' value={"Female"} onChange={(e)=> setGender(e.target.value)}/>
        </div>
        <select onChange={(e)=> setCity(e.target.value)} className='py-2 px-1 bg-gray-800 outline-none'>
          <option value="">City</option>
          <option value="Gorakhpur">Gorakhpur</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Lucknow">Lucknow</option>
        </select>
        <button className='px-6 py-2 rounded bg-indigo-600'>Submit</button>
      </form>
  );
}

export default FormHandling;
