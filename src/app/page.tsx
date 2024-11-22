import Image from 'next/image'
import HeroSection from '@/components/CustomComponent/Hero'
import Faq from '@/components/CustomComponent/Faq'
import CertificateComponent from '@/components/CustomComponent/Cert'
export default function Home() {
  return (
      <>
      <HeroSection></HeroSection>
      <CertificateComponent></CertificateComponent>
      <Faq></Faq>

      </>
  )
}
