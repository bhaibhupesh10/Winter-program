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
import RoadMap2 from '@/components/CustomComponent/RoadMap2'
import ProjectsSection from '@/components/CustomComponent/Projects'
import Tools from '@/components/CustomComponent/Tools'
import Navbar from '@/components/CustomComponent/Navbar'
export default function Home() {
  return (
      <>
         <Navbar/>
      <HeroSection></HeroSection>
      <DevOpsCurriculum/>
      <ProjectsSection></ProjectsSection>
      <InternshipCardsList></InternshipCardsList>
      <ProgramCohorts/>
      <DoubtAssistance></DoubtAssistance>
      <Tools></Tools>
      {/* <MentorFeatured /> */}
      <MentorProfile/>
      <GalleryCarousel></GalleryCarousel>
      <Pricing></Pricing>
      <Testimonials/>
      <Roadmap></Roadmap>
      <RoadMap2></RoadMap2>
      <Contact/>
      <WhatsAppBot/>
      
      <CertificateComponent></CertificateComponent>
      <Faq></Faq>

      </>
  )
}
