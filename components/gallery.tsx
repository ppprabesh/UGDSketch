"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Cybernetic Dreams",
    description: "A futuristic character concept exploring the fusion of human and machine.",
    image: "/images/girl.png",
  },
  {
    id: 2,
    title: "Ethereal Landscapes",
    description: "Surreal digital painting of an otherworldly environment.",
    image: "/images/girl2.png",
  },
  {
    id: 3,
    title: "Character Study",
    description: "Detailed character design with emphasis on expression and personality.",
    image: "/images/Viking.png",
  },
  {
    id: 4,
    title: "Abstract Visions",
    description: "Experimental digital art exploring form, color, and emotion.",
    image: "/images/rujanDai.jpg",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (id: number) => {
    setSelectedImage(id)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryItems.length
    } else {
      newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    }

    setSelectedImage(galleryItems[newIndex].id)
  }

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            FEATURED <span className="text-gray-400">WORK</span>
          </h2>
          <p className="mt-4 text-gray-400">A showcase of recent digital art projects and creations</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black"
              onClick={() => openModal(item.id)}
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <button
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {galleryItems
              .filter((item) => item.id === selectedImage)
              .map((item) => (
                <div key={item.id} className="max-h-[90vh] max-w-[90vw]">
                  <div className="relative aspect-auto h-auto max-h-[80vh] w-auto">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={1200}
                      height={800}
                      className="h-auto max-h-[80vh] w-auto rounded-lg object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  )
}
