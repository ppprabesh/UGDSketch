"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    character: "",
    props: "",
    additionalRequirements: "",
    referenceLink: "",
  })

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

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              REQUEST <span className="text-gray-400">DESIGN</span>
            </h2>
            <p className="mt-4 text-gray-400">Tell us about your vision and we'll bring it to life</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Main theme or subject of the design"
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
    </section>
  )
}
