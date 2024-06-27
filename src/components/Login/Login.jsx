import React, { useEffect } from 'react'
import { BsSpotify } from "react-icons/bs";
import "./Login.css"
import { useFormik } from 'formik';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const api = import.meta.env.VITE_API_LOCAL_BACKEND;
  const navigate = useNavigate();
  console.log(api);
  useEffect(() => {
    document.body.className = 'login-page';
    return () => {
      document.body.className = '';
    };
  }, []);
  const formData = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    onSubmit: async(values) =>{
      try{
        // console.log(values)
        await axios.post(`${api}login`,values).then(() => {
          navigate('/')
        })
      }catch(err){
        console.log(err);
      }
    }
  })


  return (
    <div className='w-full min-h-960 pr-4'>
      <div className='flex justify-center p-8'>
        <div className='div-form secondary_bg pb-8 '>
          <header className='pt-8 pb-6 flex justify-center items-center'>
            <div className=''>
              <BsSpotify className='min-w-9 min-h-9' />
            </div>
          </header>
          <h1 className='text-3xl font-bold text-center mb-8 '>Log in to spotify</h1>
          {/* Phát triển sau (Login gg)*/}
          {/* Phát triển sau (Login gg)*/}
          <hr className='my-8 mx-24 hr_bg' />
          <form onSubmit={formData.handleSubmit} className='signup-form m-auto'>
            <div className='mb-2'>
              <label htmlFor="email" className='font-bold text-base'>Email</label>
            </div>
            <div className='input-border '>
              <input onChange={formData.handleChange} name='email' type="text" id="email" className="inline-full py-3 px-4 text-base secondary_bg" placeholder='name@domain.com' />
            </div>
            <div className='mb-2 mt-4'>
              <label htmlFor="password" className='font-bold text-base'>Password</label>
            </div>
            <div className='input-border'>
              <input onChange={formData.handleChange} name='password' type="text" id="password" className="inline-full py-3 px-4 text-base secondary_bg" placeholder='Password' />
            </div>
            <button type='submit' className='m-bl-st inline-full h-12 '>
              <div className='bg-button rounded-full hover:bg-green-500 py-2 px-8 font-bold text-black'>
                Log in
              </div>
            </button>
          </form>
          <hr className='my-8 mx-24 hr_bg' />
          <div className='text-center'>
            <span className=''>
              <span className='element-sidebar'>Don't have an account?</span> <a className=' underline decoration-2 cursor-pointer'>Sign up for spotify</a>.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

