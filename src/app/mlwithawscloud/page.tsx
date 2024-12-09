import Image from 'next/image'
import MentorFeatured from '@/components/CustomComponent/MentorFeatured'
import MentorProfile from '@/components/professionalComponents/Mentor'
import GalleryCarousel from '@/components/CustomComponent/Carousel'
import Contact from "@/components/CustomComponent/ContactUs"
import WhatsAppBot from '@/components/CustomComponent/WhatsAppBot'
import Testimonials from "@/components/CustomComponent/CourseTestimonials"
import Faq from '@/components/professionalComponents/Faq'
import CertificateComponent from '@/components/professionalComponents/Cert'
import Pricing from '@/components/professionalComponents/Pricing'
import Roadmap from '@/components/CustomComponent/Roadmap'
import DoubtAssistance from '@/components/CustomComponent/DoubtAsssistant'
import InternshipCardsList from '@/components/CustomComponent/InternshipCardList'
import ProgramCohorts from '@/components/professionalComponents/ProgramCohort'
import DevOpsCurriculum from '@/components/professionalComponents/CourseCurriculum'
import SupportContact from '@/components/professionalComponents/Support'
import ProjectsSection from '@/components/CustomComponent/Projects'
import Tools from '@/components/CustomComponent/Tools'
import CourseDetails from '@/components/professionalComponents/CourseDetails'
//import NewHero from '@/components/NewHero'
import NewHero from "@/components/professionalComponents/NewHero"
import Footer from "@/components/professionalComponents/Footer"
export default function Home() {
  return (
      <>
      <NewHero></NewHero>
      <ProgramCohorts/>
      <DevOpsCurriculum/>
      <CourseDetails></CourseDetails>
      <MentorProfile/>
      <DoubtAssistance></DoubtAssistance>
      {/* common */}
      <InternshipCardsList></InternshipCardsList>
      {/* common */}
      <Tools></Tools>
      <Pricing></Pricing> 
      <CertificateComponent></CertificateComponent>
      <GalleryCarousel></GalleryCarousel>
      <Testimonials/>
      <Faq></Faq>
      <MentorFeatured />
      <SupportContact></SupportContact>
      <WhatsAppBot/>
      <Footer></Footer>
      </>
  )
}
