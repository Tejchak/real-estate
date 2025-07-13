"use client";
import Navbar from '@/components/Navbar'
import { useGetAuthUserQuery } from '@/state/api';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Layout = ({ children}: {children: React.ReactNode }) => {
  const {data: authUser, isLoading: authLoading} = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole?.toLowerCase();
      if (
        userRole === 'manager' && pathname.startsWith("/search") ||
        userRole === 'manager' && pathname ==="/")
        {
          router.push(
            "/managers/properties",
            {scroll: false}
          );
        } else {
          setIsLoading(false);
        }
    }
  }, [authUser, router, pathname]);

  if (authLoading || isLoading) return <>Loading... </>; 
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
