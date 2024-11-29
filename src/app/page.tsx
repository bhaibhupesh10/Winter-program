import Image from 'next/image'
import HeroSection from '@/components/CustomComponent/Hero'
import MentorFeatured from '@/components/CustomComponent/MentorFeatured'
import MentorProfile from '@/components/CustomComponent/Mentor'
import GalleryCarousel from '@/components/CustomComponent/Carousel'
import Contact from "@/components/CustomComponent/ContactUs"
import WhatsAppBot from '@/components/CustomComponent/WhatsAppBot'
import Testimonials from "@/components/CustomComponent/CourseTestimonials"
import Faq from '@/components/CustomComponent/Faq'
import CertificateComponent from '@/components/CustomComponent/Cert'
import Pricing from '@/components/CustomComponent/Pricing'
import Roadmap from '@/components/CustomComponent/Roadmap'
import DoubtAssistance from '@/components/CustomComponent/DoubtAsssistant'
import InternshipCardsList from '@/components/CustomComponent/InternshipCardList'
import ProgramCohorts from '@/components/CustomComponent/ProgramCohort'
import DevOpsCurriculum from '@/components/CustomComponent/CourseCurriculum'

import ProjectsSection from '@/components/CustomComponent/Projects'
import Tools from '@/components/CustomComponent/Tools'
import CourseDetails from '@/components/CustomComponent/CourseDetails'

export default function Home() {
  return (
      <>
     
      <HeroSection></HeroSection>
      <DevOpsCurriculum/>

      <ProjectsSection></ProjectsSection>
      <CourseDetails></CourseDetails>
      <InternshipCardsList></InternshipCardsList>
      <ProgramCohorts/>
      <DoubtAssistance></DoubtAssistance>
      <Tools></Tools>
      <MentorFeatured />
      <MentorProfile/>
      <GalleryCarousel></GalleryCarousel>
       <Pricing></Pricing> 
      <Roadmap></Roadmap>

      <CertificateComponent></CertificateComponent>
      <Testimonials/>
      <Contact/>
      <WhatsAppBot/>
      
      <Faq></Faq>

      </>
  )
}
