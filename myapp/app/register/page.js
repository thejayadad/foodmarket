'use client'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      toast.error('Fill all fields');
      return;
    }


    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    setCreatingUser(true);
    setUserCreated(false);
    try {
      const res = await fetch('http://localhost:3000/api/register', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ name, email, password, image }),
      });

      console.log(await res.json());
      if (res.ok) {
        toast.success('Successfully registered the user');
        setTimeout(() => {
          signIn();
        }, 1500);
        return;
      } else {
        toast.error('Error occurred while registering');
        return;
      }


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='min-h-screen'>
      <div className='grid grid-cols-1 md:grid md:grid-cols-2 min-h-screen'>
        <div className='col-span-1 px-12 py-24 flex flex-col max-w-full  rounded-lg shadow sm:px-6 md:px-8 lg:px-10'>
          <div className='w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
            <p className='text-sm title-font text-gray-500 tracking-widest'>OCEANWORLD</p>
            <h1 className='mb-8 font-bold'>
              Register
            </h1>
            {userCreated && (
        <div className="my-4 text-center">
          User created.<br />
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.<br />
          Please try again later
        </div>
      )}
            <form onSubmit={handleSubmit}>
              <div className='flex justify-between flex-col gap-8'>
                <input
                  type='text'
                  placeholder='Name...'
                  disabled={creatingUser}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type='email'
                  placeholder='Email...'
                  disabled={creatingUser}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='text'
                  placeholder='Image...'
                  disabled={creatingUser}
                  onChange={(e) => setImage(e.target.value)}
                />
                <input
                  type='password'
                  placeholder='Password...'
                  disabled={creatingUser}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                disabled={creatingUser}
                type='submit'
                >
                  REGISTER
                </button>
                <Link href={'/login'}>
                  Already Have An Account?<br /> Login
                </Link>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
        <div className='col-span-1 px-12 py-24'>
          <img
            src='https://images.pexels.com/photos/1064136/pexels-photo-1064136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            className='hidden object-cover w-full h-screen md:block'
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
