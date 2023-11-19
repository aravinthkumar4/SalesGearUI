import React from 'react'
const PromotionBanner =React.lazy(()=>import( '../components/sections/PromotionBanner'))
const Testimonials =React.lazy(()=>import( '../components/sections/Testimonials'))
const Directories =React.lazy(()=>import( '../components/sections/Directories'))
const Navbar =React.lazy(()=>import( '../components/navbar/Navbar'))
const LandingBanner= React.lazy(()=>import( '../components/sections/LandingBanner'))
const ComparisionContent= React.lazy(()=>import( '../components/sections/ComparisionContent'))
const FaqSection= React.lazy(()=>import( '../components/sections/FaqSection'))
const StartForFree= React.lazy(()=>import( '../components/sections/StartForFree'))
const Footer= React.lazy(()=>import( '../components/sections/Footer'))
const SubFooter= React.lazy(()=>import( '../components/footer/SubFooter'))

export default function Home() {
  return (
    <>
        <Navbar/>
        <LandingBanner/>
        <ComparisionContent/>
        <PromotionBanner/>
        <FaqSection/>
        <Testimonials/>
        <StartForFree/>
        <Directories/>
        <Footer/>
        <SubFooter/>
        </>
  )
}
