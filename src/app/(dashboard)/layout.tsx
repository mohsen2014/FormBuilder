import Logo from '@/components/logo'
import ThemeSwitcher from '@/components/themeSwitcher'
import { UserButton } from '@clerk/nextjs'
import React, { ReactNode } from 'react'

function Layout({children}: {children: ReactNode}) {
  return (
    <div className='flex flex-col main-h-screen main-w-full bg-background max-h-screen'>
        <nav className='flex justify-between items-center border-b border-border h-[60px] px-4 py-2'>
            <Logo />
            <div className='flex gap-4'>
              <ThemeSwitcher/>
              <UserButton afterSignOutUrl='/sign-in'/>
            </div>
        </nav>
        <main className='flex w-full flex-grow'>
            {children}
        </main>
    </div>
  )
}

export default Layout