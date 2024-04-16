"use client"
import { useSession,signOut } from "next-auth/react";
import React from 'react'
import Link from 'next/link'
import {useContext, useState} from "react";

export const Header = () => {
  const session = useSession();
  console.log(session);
  const status = session.status;

  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold ">
        <Link className="text-primary font-semibold text-2xl" href={'/'}>
          Food app
        </Link>
        <Link className="" href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </nav>

      <nav className='flex items-center gap-4 text-grb'>
        {status === 'authenticated' && (
          <button
          onClick={()=>signOut()} className="bg-primary rounded-full text-wh px-8 py-2 " >
            Logout
          </button>
        )}
        {status === 'unauthenticated' && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link href={'/register'} className="bg-primary rounded-full text-wh px-8 py-2 " >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
