"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'

export default function Error({error}: {error: Error}) {
    useEffect(() => console.log(error), [error])
  return (
    <div className='flex justify-center items-center font-bold w-full h-full flex-col gap-4'>
        <h2 className='text-destructive text-4xl'>Something went wrong</h2>
        <Button asChild>
            <link href='/'>Back to home</link>
        </Button>
    </div>
  )
}
