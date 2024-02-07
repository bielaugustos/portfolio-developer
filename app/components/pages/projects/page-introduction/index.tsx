'use client'

import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { fadeUpAnimation } from '@/app/lib/animations'
import { motion } from 'framer-motion'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="lg:w-full lg:h-[630px] h-[400px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.p className="text-gray-400 text-xs text-center max-w-[320px] my-6"
      {...fadeUpAnimation}
      >
        Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
        vontade e explore os projetos para ver como foram criados, as
        tecnologias utilizadas e as funcionalidades implementadas.
      </motion.p>
      <Link href="/">
        <HiArrowNarrowLeft size={14} />
        Voltar para Home
      </Link>
    </section>
  )
}