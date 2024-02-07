'use client'

import { z } from 'zod'
import { SectionTitle } from '../section-title'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/app/lib/animations'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { 
    handleSubmit, 
    register, 
    reset,
    formState: { isSubmitting }
   } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso !')
      reset()
    } catch{
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <section id='contact' className="text-xs py-16 px-6 md:py-[128px] flex items-center justify-center bg-zinc-900">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos ? Entre em contato"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <input
            placeholder="Nome"
            className="w-full h-[56px] bg-zinc-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-600"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-[56px] bg-zinc-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-600"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-zinc-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 focus:ring-amber-600"
            {...register('message')}
            maxLength={500}
          />

          <div className="relative w-max mx-auto mt-6">
            <Button className="z-[2] relative" disabled={ isSubmitting }>
              Enviar mensagem
              <HiArrowNarrowRight size={14} />
            </Button>
            <div className="absolute inset-0 bg-amber-600 blur-2xl opacity-20" />
          </div>
        </motion.form>
      </div>
    </section>
  )
}