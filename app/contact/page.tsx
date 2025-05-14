import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-16">
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
