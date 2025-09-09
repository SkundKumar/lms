import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import SpotlightCard from '@/components/SpotlightCard'
import { recentSessions } from '@/constants'
const page = () => {
  return (
    <main>
        <h1>Popular Companions</h1>

        <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center' >
            <CompanionCard
            id='123'
            subject='maths'
            topic='some random topic'
            time={45}
            name='some name i will put later'
            color='#E5D0FF'

            />
            <CompanionCard
            id='456'
            subject='maths'
            topic='some random topic'
            time={45}
            name='some name i will put later'
            color='#E5D0FF'

            />
            <CompanionCard
            id='789'
            subject='maths'
            topic='some random topic'
            time={45}
            name='some name i will put later'
            color='#E5D0FF'

            />
        </section>
        <section className='flex gap-4 justify-between items-start w-full max-lg:flex-col-reverse max-lg:items-center' >
          <CompanionsList
          title='Recent Sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
          />
          <SpotlightCard className="custom-spotlight-card text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
 
          </SpotlightCard>
        </section>
    </main>
  )
}

export default page