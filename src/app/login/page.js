"use client"
import React, { useState } from 'react'
import Image from 'next/image';
export default function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);
        const { ok } = await fetch('/api/login', {
            body: JSON.stringify({ email, password }),
            headers: { 'Content-type': 'application/json' },
            method: 'POST',
        });
        if (ok) {
            set
        } else {

        }
        setLoginInProgress(false);
    }
    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-8'>
                Login
            </h1>
            <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input className='border-gray300 bg-gray100' type='email' placeholder='email' value={email}
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)} />
                <input className='border-gray300 bg-gray100' type='password' placeholder='password' value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)} />
                <button type='submit' className='text-wh' disabled={loginInProgress}>
                    Login
                </button>
                <div className='my-4 text-center text-grb'>
                    or Login with provider
                </div>

                <button className='flex gap-4 justify-center' >
                    <Image src={'/google.png'} alt={''} width={32} height={32} />
                    Login With Google</button>
            </form>
        </section>
    )
}
