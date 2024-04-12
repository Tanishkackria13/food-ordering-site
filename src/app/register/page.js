"use client";
import React,{useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
export default function RegisterPage() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [creatingUser , setCreatingUser] = useState(false)
  const [userCreated , setUserCreated]=useState(false);
  const [error,setError] = useState(false)
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response=await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    });
    if(response.ok){
      setUserCreated(true);

    }
    if(!response.ok){
      setError(true)
    }
setCreatingUser(false);
}
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-8'>
        Register
      </h1>
      {userCreated && (
        <div className='my-4 text-center'>
          User created. Now you can <Link className="underline text-red400"  href={'/login'}>Login </Link>
        </div>
      )}
      {error && (
        <div className='my-4 text-center'>
        Error occured. <br/>
        Please try again later
      </div>
      )}
        <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit} >
            <input className='border-gray300 bg-gray100' type='email' placeholder='email' value={email}
            disabled={creatingUser}
            onChange={ev => setEmail(ev.target.value)} />
            <input  className='border-gray300 bg-gray100' type='password' placeholder='password' value={password}
             disabled={creatingUser}
             onChange={ev => setPassword(ev.target.value)} />
            <button type='submit' className='text-wh' disabled={creatingUser}>
              Register
              </button>
            <div className='my-4 text-center text-grb'>
               or Login with provider
            </div>

            <button className='flex gap-4 justify-center' >
              <Image src={'/google.png'} alt={''} width={32} height={32}/>
              Login With Google</button>
              <div className='text-center my-4 text-grb border-t pt-4'>
                Existing account?{' '} 
                <Link className="underline" href={'/login'}>Login here </Link>
              </div>
        </form>
    </section>
  );
}
