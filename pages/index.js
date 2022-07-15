import Head from "next/head";
import Hero from "../components/Hero";
import TechSkills from "../components/TechSkills";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Michael Sinanta | Portfolio</title>
        <meta
          name="description"
          content="Michael Christlambert Sinanta's Portfolio"
        />
        <link rel="icon" href="/logo_michael.png" />
      </Head>
      <Hero />
      <Experiences />
      <TechSkills />
      <Projects />
      <CTA />
      <Footer />
    </div>
  )
}