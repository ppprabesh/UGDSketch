"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          UGD<span className="text-gray-400">Sketch</span>
        </Link>

        <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav
          className={`${isMenuOpen ? "absolute inset-x-0 top-16 border-b border-white/10 bg-black/90 px-4 py-4 backdrop-blur-md" : "hidden"} md:block`}
        >
          <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
            
            <li>
              <Link href="/contact" className="text-sm font-medium tracking-wider hover:text-gray-400">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
