"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Phone, MessageSquare, ExternalLink, Copy, Check } from "lucide-react"

export function ContactInfo() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              GET IN <span className="text-gray-400">TOUCH</span>
            </h2>
            <p className="mt-4 text-gray-400">Let's discuss your digital art needs or just say hello</p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            <div className="relative z-10 space-y-8">
              <div className="space-y-6">
                {/* Instagram */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Instagram</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">@designstudio</p>
                      <button
                        onClick={() => copyToClipboard("@designstudio", "instagram")}
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {copied === "instagram" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                      <Link
                        href="https://instagram.com/designstudio"
                        target="_blank"
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Email</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">contact@designstudio.com</p>
                      <button
                        onClick={() => copyToClipboard("contact@designstudio.com", "email")}
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">info@designstudio.com</p>
                      <button
                        onClick={() => copyToClipboard("info@designstudio.com", "email2")}
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {copied === "email2" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Phone</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <button
                        onClick={() => copyToClipboard("+1 (555) 123-4567", "phone")}
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {copied === "phone" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">+1 (555) 987-6543</p>
                      <button
                        onClick={() => copyToClipboard("+1 (555) 987-6543", "phone2")}
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {copied === "phone2" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">WhatsApp</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <button
                        onClick={() => copyToClipboard("+1 (555) 123-4567", "whatsapp")}
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {copied === "whatsapp" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                      <Link
                        href="https://wa.me/15551234567"
                        target="_blank"
                        className="rounded-full p-1 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp QR Code */}
              <div className="mt-8 flex flex-col items-center rounded-lg border border-white/10 bg-white/5 p-6">
                <h4 className="mb-4 text-center font-medium">Scan to chat on WhatsApp</h4>
                <div className="relative h-64 w-64 overflow-hidden rounded-lg bg-white p-2">
                  <Image
                    src="/placeholder.svg?height=250&width=250"
                    alt="WhatsApp QR Code"
                    width={250}
                    height={250}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
