'use client';

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import { useTheme } from "next-themes";


// export const metadata: Metadata = {
//   title: "The modern listings website (Open-listings.com)",
//   description: "The modern listings website with maps and tags",
//   // other metadata
// };

export default function Home() {
  const { theme, setTheme } = useTheme();
  setTheme(theme === "dark" ? "light" : "light");
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
