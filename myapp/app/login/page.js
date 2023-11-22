'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from 'next-auth/react'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
      ev.preventDefault();
      setLoginInProgress(true);
  
      await signIn('credentials', {email, password, callbackUrl: 'http://localhost:3000/'});
  
      setLoginInProgress(false);
    }
  return (
    <section className='min-h-screen'>
    <div className='grid grid-cols-1 md:grid md:grid-cols-2 min-h-screen'>
      <div className='col-span-1 px-12 py-24 flex flex-col max-w-full  rounded-lg shadow sm:px-6 md:px-8 lg:px-10'>
        <div className='w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
          <p className='text-sm title-font text-gray-500 tracking-widest'>OCEANWORLD</p>
          <h1 className='self-center mt-12 mb-6 text-xl font-light text-gray-600 sm:text-xl'>
            Login
          </h1>
          <form onSubmit={handleFormSubmit}>
            <div className='flex justify-between flex-col gap-8'>
              <input
                type='email'
                placeholder='Email...'
                value={email}
                disabled={loginInProgress}
                onChange={(e) => setEmail(e.target.value)}
              />
   
              <input
                type='password'
                placeholder='Password...'
                value={password}
                disabled={loginInProgress}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
              type='submit'
            //   onClick={() => signIn()}
            disabled={loginInProgress}
              >
                LOGIN
              </button>
              <Link href={'/register'}>
                Don&apos;t have an account? <br /> Register now.
              </Link>
              <button type="button" 
            onClick={() => signIn('google', {callbackUrl: '/'})}                
            className="flex gap-4 justify-center">
          Login with google
        </button>
            </div>
          </form>
        </div>
      </div>
      <div className='col-span-1 px-12 py-24'>
        <img
          src='https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='hidden object-cover w-full h-screen md:block'
        />
      </div>
    </div>
    <ToastContainer />
  </section>
  )
}

export default Login