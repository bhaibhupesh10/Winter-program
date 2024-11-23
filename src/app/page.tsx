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
export default function Home() {
  return (
      <>
      <HeroSection></HeroSection>
      {/* <MentorFeatured /> */}
      <MentorProfile/>
      <GalleryCarousel></GalleryCarousel>
      <Testimonials/>
      <Contact/>
      <WhatsAppBot/>
      
      <CertificateComponent></CertificateComponent>
      <Faq></Faq>

      </>
  )
}
