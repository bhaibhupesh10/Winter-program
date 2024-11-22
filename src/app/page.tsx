import Image from 'next/image'
import HeroSection from '@/components/CustomComponents/Hero'
import Hero from '../components/Hero'
import WhatsAppBot from '@/components/WhatsAppBot'
import GalleryCarousel from '@/components/Carousel'
import ContactUs from "@/components/ContactUs"
import Testimonials from "@/components/Testimonails"
import MentorFeatured from '@/components/subcomponents/MentorFeatured'
import MentorProfile from '@/components/Mentor'
export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
          {/* <Hero></Hero> */}
          <WhatsAppBot></WhatsAppBot>
      {/* <MentorFeatured></MentorFeatured> */}
      <MentorProfile></MentorProfile>
      <GalleryCarousel></GalleryCarousel>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </>
  )

  }
