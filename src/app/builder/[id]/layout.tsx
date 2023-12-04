import React, { ReactNode } from 'react'

export default function layout({children}: {children: ReactNode}) {
  return (
    <div className='flex w-full mx-auto flex-grow'>{children}</div>
  )
}
