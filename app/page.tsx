import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Portfolio from '../components/Portfolio'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-[rgb(244,246,255)] text-[rgb(16,55,92)]">
      <div className="relative">
        <Navbar />
        <Hero />
        <Clients />
      </div>
      <About />
      <Services />
      <Pricing />
      <Portfolio />
     
      <Contact />
      <Footer />
    </main>
  )
}

