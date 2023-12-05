import React from 'react'
import { Button } from './ui/button'
import { MdPublish } from "react-icons/md";
export default function PublishBtn() {
  return ( 
    <Button variant="outline" className='gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400'>
        <MdPublish className="h-4 w-4"></MdPublish>
        Publish
    </Button>
  )
}
