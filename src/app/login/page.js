"use client"
import React, { useState } from 'react';
import {signIn} from "next-auth/react";
import Image from 'next/image';
import { redirect } from 'node_modules/next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);
        await signIn('credentials',{email,password, callbackUrl:'/'});
        setLoginInProgress(false);
    }
    
    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-8'>Login</h1>
            <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input
                    className='border-gray300 bg-gray100 p-2 mb-4 w-full'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input
                    className='border-gray300 bg-gray100 p-2 mb-4 w-full'
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button
                    type='submit'
                    className='bg-primary text-wh py-2 px-4 rounded'
                    disabled={loginInProgress}
                >
                    Login
                </button>
                <div className='my-4 text-center text-grb'>
                    or Login with provider
                </div>
                <button type='button' onClick={()=>signIn('google',{callbackUrl:'/'})}
                 className='flex gap-4 justify-center' >
                    <Image src='/google.png' alt='Google logo' width={32} height={32} />
                    Login With Google
                </button>
            </form>
        </section>
    );
}
