import React from 'react'

export default function SubFooter() {
  return (
    <div className='bg-darkblue px-6 py-4 flex justify-center md:justify-between flex-wrap'>
        <h6 className='text-white pb-2 md:pb-0'>© 2023 Aptare Technologies pte. Ltd.</h6>
        <div className='flex flex-col md:flex-row items-center flex-wrap gap-2 md:gap-4'>
            <h6 className='text-white underline'>Terms and Conditions</h6>
            <h6 className='text-white underline'>Privacy Policy</h6>
            <h6 className='text-white underline'>Responsible Disclosure</h6>
        </div>
    </div>
  )
}
