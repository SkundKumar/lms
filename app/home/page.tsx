import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import SpotlightCard from '@/components/SpotlightCard'
const page = () => {
  return (
    <div>
        <h1>Popular Companions</h1>

        <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center' >
            <CompanionCard
            
            />
            <CompanionCard/>
            <CompanionCard/>
        </section>
        <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center' >
          <CompanionsList/>
          <SpotlightCard className="custom-spotlight-card text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
            {/* Content goes here */}
          </SpotlightCard>
        </section>
    </div>
  )
}

export default page