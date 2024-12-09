import Image from 'next/image'
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
import Footer from '@/components/CustomComponent/Footer'
export default function Home() {
  return (
      <>
      <NewHero></NewHero>
      <ProgramCohorts/>
      <DevOpsCurriculum/>
      <CourseDetails></CourseDetails>
      <MentorProfile/>
      <DoubtAssistance></DoubtAssistance>
      <InternshipCardsList></InternshipCardsList>
      <Tools></Tools>
      <Pricing></Pricing> 
      <CertificateComponent></CertificateComponent>
      <GalleryCarousel></GalleryCarousel>
      <Testimonials/>
      <Faq></Faq>
      <MentorFeatured />
      <SupportContact></SupportContact>
      <WhatsAppBot/>
      <Footer/>
      </>
  )
}
