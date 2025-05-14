import Link from "next/link"
import { Instagram, Twitter, Dribbble, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              UGD<span className="text-gray-400">Sketch</span>
            </Link>
            <p className="text-center text-sm text-gray-400 md:text-left">
              © {new Date().getFullYear()} UGDSketch. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/ugdsketch/" className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="ugdsketch@gmail.com" className="text-gray-400 hover:text-white">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
