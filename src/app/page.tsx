import Image from 'next/image'
import HeroSection from '@/components/CustomComponent/Hero'
import MentorFeatured from '@/components/CustomComponent/MentorFeatured'
import MentorProfile from '@/components/CustomComponent/Mentor'
import GalleryCarousel from '@/components/CustomComponent/Carousel'
import Contact from "@/components/CustomComponent/ContactUs"
import WhatsAppBot from '@/components/CustomComponent/WhatsAppBot'
import Testimonials from "@/components/CustomComponent/CourseTestimonials"
export default function Home() {
  return (
      <>
      <HeroSection></HeroSection>
      <MentorProfile/>
      <MentorFeatured />
      <GalleryCarousel></GalleryCarousel>
      <Testimonials/>
      <Contact/>
      <WhatsAppBot/>
      
      </>
  )
}
