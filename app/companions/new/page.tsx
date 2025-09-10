import CompanionForm from "@/components/CompanionForm"

const NewCompanion = () => {
  
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