import ColumsAbout from '@/components/AboutUs/ColumsAbout'
import JoinAbout from '@/components/AboutUs/JoinAbout'
import SectionAbout from '@/components/AboutUs/SectionAbout'
import AboutUsBanner from '@/components/Banners/AboutUsBanner'
import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <AboutUsBanner />
      <SectionAbout />
      <ColumsAbout />
      <JoinAbout />
    </div>
  )
}
