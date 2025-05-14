import { ContactForm } from "@/components/contact-form"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Gallery } from "@/components/gallery"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Process />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
