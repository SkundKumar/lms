import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import SpotlightCard from '@/components/SpotlightCard'
import { recentSessions } from '@/constants'
import ScrambledText from '@/components/ScrambledText'
import Image from 'next/image'
import Link from 'next/link'
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
          classNames='w-2/3 mb-10  max-lg:w-full '
          />
          <SpotlightCard className="custom-spotlight-card text-white w-full h-[38rem] flex flex-col items-center" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1 className='text-lg text-zinc-800 cta-badge'>Start Learning your way</h1>
                  <ScrambledText
                        className=" scrambled-text-demo text-3xl text-center font-bold  text-white/90 mt-10 "
                        
                        radius={25}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=".:"
                      >
                      Build and personalise learning companion
                  </ScrambledText>
            <p className='mt-4 text-center text-sm text-white/60 mb-4' >&quot;Pick a name, subject, voice, &amp; personality - and start learning through voice conversation that feels natural and fun&quot;
            </p>
              <Image src='images/cta.svg' alt='sd' width={362} height={232}/>
              <button className='flex gap-2 mt-12 border-1 p-2 rounded-full hover:p-3 transition-all duration-300 ease-in-out '>
                <Image src='/icons/plus.svg' alt='dfg' width={12} height={12}/>
                <Link href="/companions/new">
                  <p>Build a new companion</p>
                </Link>
              </button>
          </SpotlightCard>
        </section>
    </main>
  )
}

export default page