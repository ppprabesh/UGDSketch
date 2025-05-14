"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Game Developer",
    content:
      "The character designs exceeded my expectations. They perfectly captured the essence of our game world while adding unique creative elements I hadn't even considered.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Author",
    content:
      "Working with this studio to visualize characters from my novel was an incredible experience. The attention to detail and ability to translate written descriptions into stunning visuals is remarkable.",
  },
  {
    id: 3,
    name: "Michael Torres",
    role: "Creative Director",
    content:
      "I've collaborated with many digital artists, but none have delivered the level of quality and creativity I've experienced here. The process was smooth, and the results were outstanding.",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              CLIENT <span className="text-gray-400">FEEDBACK</span>
            </h2>
          </div>

          <div
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <Quote className="absolute left-6 top-6 h-12 w-12 opacity-20" />

            <div className="relative z-10">
              <div className="relative h-[200px] overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === current
                        ? "translate-x-0 opacity-100"
                        : index < current
                          ? "-translate-x-full opacity-0"
                          : "translate-x-full opacity-0"
                    }`}
                  >
                    <blockquote className="mb-6 text-lg italic text-gray-200">"{testimonial.content}"</blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-white/10"></div>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-2">
              <button
                onClick={prev}
                className="rounded-full border border-white/10 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 w-2 rounded-full ${
                      index === current ? "bg-white" : "bg-white/30"
                    } transition-colors`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="rounded-full border border-white/10 p-2 text-white transition-colors hover:bg-white/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
