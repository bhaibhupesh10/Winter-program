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
import SupportContact from '@/components/CustomComponent/Support'
import ProjectsSection from '@/components/CustomComponent/Projects'
import Tools from '@/components/CustomComponent/Tools'
import CourseDetails from '@/components/CustomComponent/CourseDetails'
import NewHero from '@/components/NewHero'
export default function Home() {
  return (
      <>
     
      {/* <HeroSection></HeroSection> */}
      <NewHero></NewHero>
      {/* Program  cohort */}
      <ProgramCohorts/>
      {/* Technical content */}
      <DevOpsCurriculum/>
      {/* cap stone project */}
      <CourseDetails></CourseDetails>
      {/* About mentor */}
      <MentorProfile/>
{/* Discord community */}
      <DoubtAssistance></DoubtAssistance>
      {/* Our placed student s */}
      <InternshipCardsList></InternshipCardsList>
{/* Master 15+ project */}
      <Tools></Tools>
{/* Pricing real skills real project section */}
      <Pricing></Pricing> 
{/* get Certified  */}
      <CertificateComponent></CertificateComponent>
{/* Gallary */}
      <GalleryCarousel></GalleryCarousel>
{/* Testimoniols */}
      <Testimonials/>
{/* Faq */}
      <Faq></Faq>
{/* Our alumini working at */}
      <MentorFeatured />
{/* Contact details */}
      <SupportContact></SupportContact>
      
       
      {/* <Roadmap></Roadmap> */}



      {/* <Contact/> */}

      <WhatsAppBot/>
      


      </>
  )
}
