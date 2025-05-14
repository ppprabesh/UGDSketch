"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, Phone, Send, MessageSquare, ExternalLink, Copy, Check } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    subject: "",
    character: "",
    props: "",
    additionalRequirements: "",
    referenceLink: "",
  })

  const [copied, setCopied] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to backend in a real application
    console.log("Form submitted:", formData)
    alert("Request submitted successfully!")
    setFormData({
      subject: "",
      character: "",
      props: "",
      additionalRequirements: "",
      referenceLink: "",
    })
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              GET IN <span className="text-gray-400">TOUCH</span>
            </h2>
            <p className="mt-4 text-gray-400">Let's discuss your digital art needs or just say hello</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl font-bold">Contact Details</h3>

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
                <div className="mt-8 flex flex-col items-center rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-4 text-center font-medium">Scan to chat on WhatsApp</h4>
                  <div className="relative h-48 w-48 overflow-hidden rounded-lg bg-white p-2">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="WhatsApp QR Code"
                      width={200}
                      height={200}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-transparent to-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold">Request Design</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Main theme or subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="character" className="text-sm font-medium">
                        Character
                      </label>
                      <Input
                        id="character"
                        name="character"
                        placeholder="Main character or focus"
                        value={formData.character}
                        onChange={handleChange}
                        className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="props" className="text-sm font-medium">
                      Props
                    </label>
                    <Input
                      id="props"
                      name="props"
                      placeholder="Objects, elements, or props to include"
                      value={formData.props}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="additionalRequirements" className="text-sm font-medium">
                      Additional Requirements
                    </label>
                    <Textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      placeholder="Any specific details, style preferences, or special requests"
                      rows={4}
                      value={formData.additionalRequirements}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="referenceLink" className="text-sm font-medium">
                      Reference Link
                    </label>
                    <Input
                      id="referenceLink"
                      name="referenceLink"
                      type="url"
                      placeholder="Link to reference images or inspiration"
                      value={formData.referenceLink}
                      onChange={handleChange}
                      className="border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-white"
                    />
                  </div>

                  <Button type="submit" className="group w-full bg-white text-black hover:bg-gray-200">
                    Submit Request
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
