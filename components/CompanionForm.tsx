"use client"
import React from 'react'

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { subjects } from '@/constants'
import { Textarea } from './ui/textarea'

 
const CompanionForm = () => {
     
const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    subject: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    topic: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    voice: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    style: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    duration: z.coerce.number().min(1, {
      message: "Username must be at least 2 characters.",
    }),
  })
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: " ",
        subject: " ",
        topic: " ",
        voice: " ",
        style: " ",
        duration: 15 
      },
    })
   
    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Companion Name</FormLabel>
            <FormControl>
              <Input placeholder="Companion name" className='input' {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
          
        )}
      />
      <FormField
        control={form.control}
        name="subject"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Subject Name</FormLabel>
            <FormControl>
            <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
            >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select Subject" />
  </SelectTrigger>
  <SelectContent>
    {subjects.map((subject)=>(
        <SelectItem
            value={subject}
            key={subject}
            className='capitalize'
        >
                {subject}
        </SelectItem>
    ))}
  </SelectContent>
</Select>
            </FormControl>
           
            <FormMessage />
          </FormItem>
          
        )}
      />
      <FormField
        control={form.control}
        name="topic"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What help do you need</FormLabel>
            <FormControl>
              <Textarea placeholder="Ex. Derivatives and Integrals" className='input' {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
          
        )}
      />
      <FormField
        control={form.control}
        name="voice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select the voice</FormLabel>
            <FormControl>
            <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
            >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the voice" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem
    value='male'
    >
        Male
    </SelectItem>
    <SelectItem
    value='female'
    >
        Female
    </SelectItem>
  </SelectContent>
</Select>
            </FormControl>
           
            <FormMessage />
          </FormItem>
          
        )}
      />
     <FormField
        control={form.control}
        name="style"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Select the voice style</FormLabel>
            <FormControl>
            <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
            >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the voice style" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem
    value='formal'
    >
        Formal
    </SelectItem>
    <SelectItem
    value='casual'
    >
        Casual
    </SelectItem>
  </SelectContent>
</Select>
            </FormControl>
           
            <FormMessage />
          </FormItem>
          
        )}
      />
      <FormField
        control={form.control}
        name="duration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Duration</FormLabel>
            <FormControl>
              <Input placeholder="15" type='number' className='input' {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
          
        )}
      />
      <Button type="submit" className='w-full cursor-crosshair'>Build Your Companion</Button>
    </form>
  </Form>
  )
}

export default CompanionForm