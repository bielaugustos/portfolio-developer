'use client'

import { Button } from "@/app/components/button"
import { CMSIcon } from "@/app/components/cms-icon"
import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { HomePageInfo } from "@/app/types/page-info"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

type HomeSectionProps = {
  homeInfo : HomePageInfo
}

export const HeroSection = ({ homeInfo }: HomeSectionProps) => {

  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  console.log(homeInfo.introduction)
 
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
         {/* Seção de texto Hero Section (aside) */}
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-amber-400">hello world !</p>
          <h2 className="text-4xl font-medium mt-3">Gabriel Augusto</h2>
          <div className="text-gray-400 my-6 text-sm sm:text-base">
          <RichText content={homeInfo.introduction.raw}></RichText>
          </div>

         {/* Seção de Badge's  */}
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg-max-w-[340px]">
            {homeInfo.technologies.map(( tech ) => (
              <TechBadge 
                name={tech.name}
              />
            ))}
          </div>

         {/* Seção de Contatos Hero Section */}
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>Entre em Contato
            <HiArrowNarrowRight size={18}/>
            </Button>
              <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) =>(
                <a 
                href={contact.url}
                key={`contact-${index}`}
                target="_blank"
                className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon= {contact.iconSvg} />
                </a>
              ) )}
              </div>
          </div>
        </div>
        
         {/* Seção da Imagem Hero Section (aside) */}
        <Image
          width={420}
          height={404}
          src={homeInfo.profilePicture.url}
          alt="Foto de Perfil do Gabriel Augusto"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-full object-cover"
          />

      </div>
    </section>
  )
}