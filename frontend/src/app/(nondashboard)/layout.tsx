"use client";
import Navbar from '@/components/Navbar'
import { useGetAuthUserQuery } from '@/state/api';
import React from 'react'

const Layout = ({ children}: {children: React.ReactNode }) => {
  const {data: authUser } = useGetAuthUserQuery();
  console.log("authUser:", authUser);
  return (
    <div>
      <Navbar />
      <main className={'h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]'}>
        {children}
      </main>
    </div>
  )
}

export default Layout
