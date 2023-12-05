import React from 'react'
import { ImSpinner2 } from 'react-icons/im'

export default function loading() {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <ImSpinner2 className="animate-spin w-12 h-12"></ImSpinner2>
    </div>
  )
}
