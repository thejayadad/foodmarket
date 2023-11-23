'use client'
import React, { useEffect, useState } from 'react'
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";



const ProfilePage = () => {
const session = useSession()
const {status} = session;
const [user, setUser] = useState('');
const [profileFetched, setProfileFetched] = useState(false);


useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/profile')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching profile');
          }
          return response.json();
        })
        .then(data => {
          setUser(data);
          setProfileFetched(true);
        })
        .catch(error => {
          console.error(error);
          // Handle the error (e.g., show an error message)
        });
    }
  }, [session, status]);
  

  async function handleProfileInfoUpdate(ev, data) {
    ev.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });
      if (response.ok)
        resolve()
      else
        reject();
    });

    await toast.promise(savingPromise, {
      loading: 'Saving...',
      success: 'Profile saved!',
      error: 'Error',
    });

  }


if(status === 'loading'){
    return <h2 className='text-center text-primary'>LOADING..........</h2>
}
if (status === 'unauthenticated') {
    return redirect('/login');
  }


  const userImage = session.data.user.image;
  return (
    <section className='min-h-screen px-4 py-8'>
        <div className='max-w-xl mx-auto bg-white shadow-lg '>
            <img
                className='w-full mb-4 rounded-t-lg h-64'
                src='https://images.pexels.com/photos/207344/pexels-photo-207344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 border border-secondary shadow'
            />
            <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                <div className='relative block'>
                    <img
                    className='mx-auto object-cover rounded-full h-32 w-32 '
                    src={userImage}
                    />
                    <p
                    className='mt-2 text-xl font-medium text-gray-800 dark:text-white'
                    ></p>
                </div>
                <form className='grow' onSubmit={handleProfileInfoUpdate}>
                <input type='text'
                value={user}
                onChange={ev => setUser(ev.target.value) }
                placeholder='Name....' />
                <input className='mt-4' type='email' value={session.data.user.email} />
                </form>
                <button className='bg-secondary mt-4' type='submit'>Save</button>
            </div>
        </div>
  
    </section>
  )
}

export default ProfilePage