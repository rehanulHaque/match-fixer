import { BellIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="grid grid-cols-7 gap-2 h-[88vh] relative">
        <div className='absolute top-5 right-5 bg-white p-2 rounded-full h-10 w-10 flex justify-center items-center border border-black'>
            <Link href="/all-request"><BellIcon/></Link>
        </div>
      <div className='bg-gray-50 col-span-1 h-full'>
        <h1 className='text-xl text-center my-2'>Chat list</h1>
      </div>
      <div className='bg-gray-100 col-span-6 h-full'>
            chat
      </div>
    </div>
  )
}
