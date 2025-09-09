import React from 'react'
import { CrowdCanvas } from '@/components/ui/skiper-ui/skiper39'
import PixelCard from '@/components/PixelCard'

const Page = () => {
  return (
    <>
       <div className="relative h-screen w-full pl-0 pr-0 flex  items-center flex-col">
        <div className='absolute top-40 flex flex-col gap-15   justify-center items-center'>
          <div className='flex flex-col  '>
              <h1 className=" text-6xl font-bold text-center mb-2">Stand Out From The Croud</h1>
          <h1 className='text-lg text-center text-black/60 ' >Leverage AI to learn.</h1>
          </div>
          <PixelCard variant="default"   className='z-10  bg-black '>
            <h1 className='absolute text-white'> <a href="/sign-in">Get Started</a></h1>
</PixelCard>
         
        </div>
        
        
      <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
    </div>
    </>
  )
}

export default Page