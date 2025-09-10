'use server'

import CompanionForm from "@/components/CompanionForm"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const NewCompanion = async () => {
  const{userId} = await auth();
  if(!userId) redirect(('/sign-in'))
  
  return (
    <div className='w-full flex flex-col items-center justify-center'  >
      <article className='lg:w-1/4 gap-4 mt-20    '>
      <h1>Companion Builder</h1>
      <CompanionForm/>
      </article>
      
    </div>
  )
}

export default NewCompanion